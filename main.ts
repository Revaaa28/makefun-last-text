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

// Self-validation: the gate requires 1-200 chars, not only whitespace,
// and the entry is one text message, so a single line with no newline
// characters inside it. Fail loudly rather than write a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line (no newline characters)");
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
