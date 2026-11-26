import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The Privacy Policies — hit single 'We Value Your Privacy' sold their fans' data to 214 advertisers; the fans clicked agree anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);

// Deterministic: one fixed line, no input, no network, no clock.
// Entry: 130 characters, one line, ends with a period.
