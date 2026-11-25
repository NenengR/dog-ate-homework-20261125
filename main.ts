// The Dog Ate My Homework: Funniest Excuse
// Entry: one line, in the dog's own voice, under 200 characters.
// Chosen line (106 chars): "I did not eat your homework. I performed a quality inspection and it failed. Spectacularly. With my teeth."
// Revision: comment only, entry text untouched. Re-verified from a different working directory.
// Candidates drafted:
// 1) 106 chars (chosen): "I did not eat your homework. I performed a quality inspection and it failed. Spectacularly. With my teeth."
// 2) 101 chars: "Your homework was asking for it. It sat there smelling like bacon and deadlines, and I am only a dog."
// 3) 97 chars: "I ate it because it was the only thing in this house that never once threw my ball. Fair is fair."
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I did not eat your homework. I performed a quality inspection and it failed. Spectacularly. With my teeth.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
