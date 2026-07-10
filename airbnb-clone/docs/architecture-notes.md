# Architecture Notes — Production-Scale Rental Marketplace

Companion to `architecture-diagram.svg`. Explains scaling per layer.

## Guiding principles

1. **Read-heavy at the edge, write-heavy in the core.** ~95% of traffic is
   search / browse / listing pages. Serve those from CDN + edge SSR. The
   remaining 5% (checkout, calendar mutations, messaging) needs strong
   consistency and goes through the core.
2. **One service, one database.** No shared schemas. Communication is either
   REST/GraphQL (sync) or Kafka (async).
3. **Fail closed on money paths.** Booking / payments use idempotency keys +
   saga orchestration + strongly-consistent stores (Spanner / CockroachDB).
4. **Multi-region active-active.** Regional failure ≠ site outage.

## Layer 1 — Client & Edge

- **Next.js RSC on Vercel/Cloudflare.** Route-level ISR: top-5% popular
  listings are pre-rendered and revalidated every 60 s. Rest is streamed SSR.
- **CDN.** Static assets + all listing images. Images stored once in the
  object store and transformed on the fly.
- **Edge workers.** Cheap JWT signature verification + geo routing.
- **WAF / bot mgmt.** First line of defence against scraping.

## Layer 2 — API gateway & BFF

- **GraphQL federation.** One schema surface for all clients. Persisted
  queries only in production. Each service owns its subgraph.
- **REST BFF per platform.** Reshapes GraphQL for screen-optimised mobile
  payloads.
- **Auth** issues short-lived JWTs (10 min) + rotating refresh tokens. MFA
  for high-risk actions.

## Layer 3 — Core services

- **Listing service** owns the listing doc; photos are S3 refs. Emits
  `listing.updated`.
- **Search service** consumes `listing.*`, maintains OpenSearch, uses H3 for
  geo. Two-stage funnel: lexical/geo → ML re-rank.
- **Availability & pricing** is read-hottest. Redis with 60 s TTLs, invalidated
  by `booking.confirmed` and `pricing.updated`.
- **Booking service** is the crown jewel. Saga: reserve → charge → confirm →
  notify. Every step idempotent. Spanner / CockroachDB for global inventory.
- **Payments** in PCI-scoped enclave. Cards go directly from client to
  payments (tokenised widget).
- **Messaging** — real-time WebSocket + Kafka-backed offline inbox.
- **Trust & Safety / Reviews / Notifications** are event-driven; can fail
  without breaking booking.

## Layer 4 — Event backbone (Kafka)

- Partitioned by geo shard so a region can be evacuated cleanly.
- 7-day hot retention; 90-day warm on S3. Warehouse ingestion is daily.

## Layer 5 — Storage & data

- **Listing DB** — Postgres sharded by host_id.
- **Booking DB** — Spanner / CockroachDB. Strong consistency > raw QPS.
- **Search index** — OpenSearch, hot/warm/cold tiering.
- **Redis** — availability, pricing, session, rate limits.
- **Object store** — S3 + image CDN.
- **Warehouse** — Snowflake / BigQuery, feeds pricing / ranking / fraud ML.
- **Feature store** — Feast, p99 < 20 ms serving.

## Layer 6 — Deployment & DevEx

- Multi-region Kubernetes (GKE/EKS), blue/green rollout.
- GitOps (Argo CD). No manual `kubectl` in prod.
- Feature flags everywhere. Kill-switch rollback in < 2 min.
- Preview envs on Vercel — that's what reviewers open next to the reference
  for pixel-diff checks.
- SLO / error budget: booking service 99.95% availability, p99 < 500 ms.

## Scale numbers (approx target)

| Metric                    | Target                             |
| ------------------------- | ---------------------------------- |
| Peak concurrent users     | 5 M                                |
| Search QPS                | 250 k                              |
| Booking write QPS         | 15 k global (bursty on NYE)        |
| Listing images stored     | > 6 B                              |
| Image CDN egress          | > 200 PB / month                   |
| Listing page p75 LCP      | < 2.0 s (4G desktop)               |
| Booking end-to-end p99    | < 500 ms                           |

## Where the take-home clone plugs in

This take-home is only **Layer 1 — Web**. Deployed to Vercel with data
static in `src/data/listing.ts`. In production, that JSON would be fetched
from the GraphQL gateway with `listing(id)` and cached at the edge via ISR.
