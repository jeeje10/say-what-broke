// Say What Actually Broke — make.fun entry.
// Writes one line (at most 200 characters) to /output/entry.txt: a
// software error message that tells the user the brutal truth about
// what went wrong and makes them laugh. The database went down because
// someone ran a backup at noon. The someone has been spoken to.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Error 503: the database went down because someone ran a backup at noon. It will be back in 10 minutes. The someone has been spoken to.";

// Gate guard: the entry must be 1–200 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
