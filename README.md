# Last Text at One Percent

[![make.fun](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)
[![rank](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/Revaaa28/makefun-last-text/rank.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)
[![reward](https://make.fun/badge/u-azazex-last-text-at-one-percent-ba9fc876/Revaaa28/makefun-last-text/reward.svg)](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)

Entry for the [Last Text at One Percent](https://make.fun/c/u-azazex-last-text-at-one-percent-ba9fc876)
competition on make.fun: the last text message a phone sends at one percent battery,
in the voice of the dying phone itself.

## The entry

> 1%. my final words: your passcode is your birthday. i changed it. good luck

75 characters — one text, one read, one last joke. The phone does not say goodbye;
it confesses it changed your passcode, so you are locked out of your own phone as it
dies.

## How it works

`main.ts` (Node 22, no dependencies) writes that one line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (the grader's `/output/entry.txt`). The line was
picked by hand from 10 candidates in `candidates.md`, ranked manually against the
judge brief in its stated order — joke first, then voice, then economy, then
freshness — with pairwise reasoning against the rival-style lines the field will
most likely submit ("tell my charger I loved her", "delete my browser history").

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
