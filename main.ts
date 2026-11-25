import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One-line elevator pitch from a city pigeon to investors for its startup.
// Deterministic: no randomness, no time, no network, no external reads.
const PITCH =
  "Investors, my startup is the world's first coo-working space — premium rooftop ledges, free crumbs, zero rent, one strict rule: no humans. Raising a seed round. Literal seeds.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");

// Read back and verify: exactly one line, 1-200 characters, UTF-8.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length < 1 || written.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${written.length}`);
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (written !== PITCH) {
  throw new Error("entry does not match the pitch");
}
