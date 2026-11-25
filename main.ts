import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "Fix division by zero by outlawing zero";
const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./entry.txt"];
for (const dir of candidates) { if (dir === undefined) continue; try { mkdirSync(dir, { recursive: true }); writeFileSync(join(dir, "entry.txt"), LINE, "utf8"); break; } catch {} }
