// Run after setting BLOB_READ_WRITE_TOKEN in .env.local
// Usage: node scripts/upload-music.mjs

import { put } from "@vercel/blob";
import { readFileSync, readdirSync } from "fs";
import { resolve, join } from "path";
import { config } from "dotenv";

config({ path: ".env.local" });

const TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
if (!TOKEN) { console.error("BLOB_READ_WRITE_TOKEN não encontrado"); process.exit(1); }

// Remove Vercel env vars so SDK uses explicit token instead of OIDC
delete process.env.VERCEL_OIDC_TOKEN;
delete process.env.VERCEL;
delete process.env.VERCEL_ENV;

const MUSIC_DIR = resolve("public/music");
const files = readdirSync(MUSIC_DIR)
  .filter((f) => f.endsWith(".mp3"))
  .sort();

console.log(`Uploading ${files.length} tracks...\n`);

const results = [];

for (const file of files) {
  const filePath = join(MUSIC_DIR, file);
  const buffer = readFileSync(filePath);
  const blob = await put(`music/${file}`, buffer, {
    access: "public",
    contentType: "audio/mpeg",
    token: TOKEN,
  });
  results.push({ file, url: blob.url });
  console.log(`✓ ${file} → ${blob.url}`);
}

console.log("\n--- URLs para o TRACKS array ---");
for (const { file, url } of results) {
  console.log(`  { src: "${url}" },  // ${file}`);
}
