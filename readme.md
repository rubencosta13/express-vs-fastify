# Fastify vs Express

### Consider leaving a star, it helps a lot. And motivates me to do more things like this

- Challenge: 

1. Load random data to a mongodb database
2. Retrieve 1 record
3. Retrieve all results

- Caveats

1. No Caching to be fair
2. No multithreading
3. Use as less as possible external libs


- Technologies used
  - Node.JS (No TypeScript yet, maybe a WIP)
  - Mongoose

# Note:
  1. Each mongodb databases are located in Paris, closest location given from the M0 at mongodb.com
  2. Every database has 1000 records, generated with faker
  3. Every tests were done with a Macbook Pro M1 2020 baseline version, (8GB RAM and 256GB SSD)
  4. Each database has the same hardware and networking equipments


# Express 

## Single User test
```bash
Running 10s test @ http://localhost:3000/user/getOne
10 connections


┌─────────┬───────┬───────┬────────┬────────┬──────────┬──────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5%  │ 99%    │ Avg      │ Stdev    │ Max    │
├─────────┼───────┼───────┼────────┼────────┼──────────┼──────────┼────────┤
│ Latency │ 42 ms │ 45 ms │ 616 ms │ 648 ms │ 96.24 ms │ 150.8 ms │ 687 ms │
└─────────┴───────┴───────┴────────┴────────┴──────────┴──────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 78      │ 78      │ 101     │ 101     │ 98.2    │ 6.84    │ 78      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 35.2 kB │ 35.2 kB │ 45.7 kB │ 45.9 kB │ 44.5 kB │ 3.12 kB │ 35.2 kB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

981 2xx responses, 1 non 2xx responses
992 requests in 10.03s, 445 kB read
```

## All user test
```
Running 10s test @ http://localhost:3000/user/getAll
10 connections


┌─────────┬────────┬────────┬────────┬────────┬──────────┬───────────┬─────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg      │ Stdev     │ Max     │
├─────────┼────────┼────────┼────────┼────────┼──────────┼───────────┼─────────┤
│ Latency │ 128 ms │ 168 ms │ 613 ms │ 766 ms │ 207.5 ms │ 120.14 ms │ 1087 ms │
└─────────┴────────┴────────┴────────┴────────┴──────────┴───────────┴─────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 18      │ 18      │ 50      │ 53      │ 47.3    │ 9.83    │ 18      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.93 MB │ 3.93 MB │ 10.9 MB │ 11.6 MB │ 10.3 MB │ 2.14 MB │ 3.92 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

483 requests in 10.03s, 103 MB read
```

# Fastify
## Single user test

```bash
Running 10s test @ http://localhost:3000/user/getOne
10 connections


┌─────────┬───────┬───────┬────────┬────────┬──────────┬───────────┬────────┐
│ Stat    │ 2.5%  │ 50%   │ 97.5%  │ 99%    │ Avg      │ Stdev     │ Max    │
├─────────┼───────┼───────┼────────┼────────┼──────────┼───────────┼────────┤
│ Latency │ 44 ms │ 48 ms │ 581 ms │ 599 ms │ 97.95 ms │ 145.09 ms │ 643 ms │
└─────────┴───────┴───────┴────────┴────────┴──────────┴───────────┴────────┘
┌───────────┬─────────┬─────────┬─────────┬───────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5% │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼───────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 85      │ 85      │ 101     │ 108   │ 100     │ 5.45    │ 85      │
├───────────┼─────────┼─────────┼─────────┼───────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 33.9 kB │ 33.9 kB │ 40.2 kB │ 43 kB │ 39.8 kB │ 2.16 kB │ 33.9 kB │
└───────────┴─────────┴─────────┴─────────┴───────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

1k requests in 10.03s, 398 kB read
```
## All users test
```
Running 10s test @ http://localhost:3000/user/getAll
10 connections


┌─────────┬────────┬────────┬────────┬────────┬──────────┬───────────┬─────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg      │ Stdev     │ Max     │
├─────────┼────────┼────────┼────────┼────────┼──────────┼───────────┼─────────┤
│ Latency │ 139 ms │ 180 ms │ 652 ms │ 797 ms │ 217.7 ms │ 125.87 ms │ 1172 ms │
└─────────┴────────┴────────┴────────┴────────┴──────────┴───────────┴─────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 14      │ 14      │ 49      │ 56      │ 45.4    │ 11.57   │ 14      │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 3.06 MB │ 3.06 MB │ 10.7 MB │ 12.2 MB │ 9.91 MB │ 2.52 MB │ 3.05 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.
# of samples: 10

464 requests in 10.02s, 99.1 MB read
```

# Side by side comparision

| Test Type   | Express | Fastify |
|-------------|---------|---------|
| Single User | 992 requests in 10.03s [ 445kB read ] | 1000 requests in 10.03s [ 398 kB read]        |
| All Records | 483 requests in 10.03s [ 103MB read ] | 464 requests in 10.02s [ 99.1 MB read]        |


> You can now get your own conclusions... We won't give any opinionated conclusion.

# Do you think we missed any part / any improment open an issue.
