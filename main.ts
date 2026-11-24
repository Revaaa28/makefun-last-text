// Last Text at One Percent — make.fun entry (program/v1).
// Writes one final text message, in the voice of a phone at 1% battery,
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (the grader's /output in the sandbox).
// Chosen line: ranked #1 of 10 candidates in candidates.md by manual judging
// against the judge brief (joke first, then voice, then economy, then freshness).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "1%. my final words: your passcode is your birthday. i changed it. good luck";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
