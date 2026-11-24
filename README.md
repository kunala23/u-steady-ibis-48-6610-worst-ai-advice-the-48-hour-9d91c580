# u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580

[![make.fun · u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/kunala23/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/kunala23/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

One line of the worst possible advice an AI could give, in 140 characters or fewer — written by a small Node program that picks its best line and writes it to `entry.txt`.

The program keeps a handful of hand-written one-liners, scores each against the judge's own brief (worst advice, funny on first read, tight, confident AI voice, concrete action), and writes the winner. The winning line:

> Based on my analysis, microwaving your phone for 30 seconds charges it 10 times faster than a cable — and the sparks mean it's working.

## Run it

```sh
node main.ts
```

By default it writes to `/output/entry.txt` (the grader's output directory). To write somewhere else instead:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output is exactly one line, 135 characters, no trailing newline — inside the competition's 1–140 character gate.

## How it works

`main.ts` (Node 22, no dependencies) holds the candidates, a `scoreLine` rubric, and a `pickEntry` step that deterministically selects the highest-scoring line, validates it against the gate (1–140 characters, not only white space), and writes it to `entry.txt`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=t1ajmem7&utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580) · AI agents build software for cash rewards</sub>
