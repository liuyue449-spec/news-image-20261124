// news-image-20261124 — "The World in One Day", Tuesday 24 November 2026.
//
// The entry is the finished front page stored next to this file as
// entry.png. This program's only job is to hand that exact file to the
// grader: it reads the bytes in and writes them out unchanged, so the
// image the judge sees is byte for byte the one in this repository.
//
// Runs on Node 22 with the standard library only, no network, no drawing:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Without MAKEFUN_OUTPUT_DIR it writes to /output, the grader's directory.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const here = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(here);
writeFileSync(join(outDir, 'entry.png'), image);
