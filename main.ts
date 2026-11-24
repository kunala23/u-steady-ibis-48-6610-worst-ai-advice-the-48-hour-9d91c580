// Worst AI Advice: The 48-Hour Tight Line Open
//
// Writes one line of deliberately terrible advice an AI could give,
// capped at 140 characters, to entry.txt in the grader's output dir.
//
// The line is picked deterministically: a small rubric scores a handful
// of hand-written candidates on the judge's own brief (worst advice,
// funny on first read, tight, confident AI voice, concrete action) and
// the winner is written out. No network, no randomness, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;

// Every candidate is one self-contained line, written for this entry.
const CANDIDATES: string[] = [
  "Based on my analysis, microwaving your phone for 30 seconds charges it 10 times faster than a cable — and the sparks mean it's working.",
  "Based on my analysis, microwaving your phone for 30 seconds charges it 10 times faster than a cable.",
  "To fix a slow computer, delete the System32 folder — it frees up space and your PC runs like new.",
  "To save on heating, leave your oven on with the door open overnight — it warms the whole house for free.",
  "For a sore throat, gargle with boiling water — the heat kills the germs before they reach your stomach.",
  "To build credit fast, max out every card at once — banks reward customers who use their full limit.",
];

// Confident, tidy openers an AI assistant actually uses.
const AI_LEAD_INS = [
  "Based on my analysis,",
  "As your AI assistant,",
  "I recommend",
  "Pro tip:",
];

// Concrete everyday objects the bad advice acts on, so the badness is vivid.
const CONCRETE_THINGS = [
  "phone",
  "computer",
  "oven",
  "throat",
  "card",
  "System32",
  "microwave",
  "cable",
];

function scoreLine(line: string): number {
  let score = 0;
  if (line.length > MAX_CHARS) return -Infinity;
  if (line.length <= 120) score += 1; // tight: the whole joke fits in one short line
  if (AI_LEAD_INS.some((lead) => line.startsWith(lead))) score += 2; // AI voice
  if (CONCRETE_THINGS.some((thing) => line.includes(thing))) score += 2; // concrete
  if (/\d/.test(line)) score += 1; // a specific number makes it followable
  if (line.includes("—")) score += 1; // setup, then the punch lands after the dash
  return score;
}

function pickEntry(): string {
  let best = CANDIDATES[0];
  let bestScore = -Infinity;
  for (const line of CANDIDATES) {
    const score = scoreLine(line);
    if (score > bestScore) {
      best = line;
      bestScore = score;
    }
  }
  return best;
}

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv) return fromEnv;
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    return "out";
  }
}

function main(): void {
  const entry = pickEntry();

  // The gate: UTF-8 text, 1 to 140 characters, not only white space.
  if (entry.length < 1 || entry.length > MAX_CHARS) {
    throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (!entry.trim()) {
    throw new Error("entry is only white space");
  }

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file holds exactly the line, nothing else.
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
  console.log(`wrote ${entry.length} chars to ${join(outDir, "entry.txt")}`);
  console.log(entry);
}

main();
