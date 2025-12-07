import { readFileSync, writeFileSync } from "fs";
import path from "path";

const sha = process.env.VERCEL_GIT_COMMIT_SHA || "dev";

const htmlPath = path.resolve(__dirname, "..", "..", "client", "index.html")

const html = readFileSync(htmlPath, "utf8");
const updated = html.replace("__COMMIT_SHA_PLACEHOLDER__", sha);

writeFileSync(htmlPath, updated);

console.log("Injected commit SHA", sha, "into", htmlPath);