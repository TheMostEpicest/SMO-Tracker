import { readFileSync, writeFileSync } from "fs";
import path from "path";

const files = [
    path.resolve(__dirname, "..", "..", "client", "index.html"),
    path.resolve(__dirname, "..", "..", "client", "overlay", "index.html"),
    path.resolve(__dirname, "..", "..", "client", "js", "index.js"),
    path.resolve(__dirname, "..", "..", "client", "js", "overlay.js"),
];

files.map((file) => {
    let data = readFileSync(file, "utf8");
    const updated = data.replaceAll("http://localhost:3000", "https://smo-tracker.vercel.app");
    writeFileSync(file, updated);
});

console.log("Replaced localhost:3000 with smo-tracker.vercel.app");