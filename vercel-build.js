// vercel-build.js
const fs = require("fs");
const path = require("path");
const cp = require("child_process");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  cp.execSync(`mkdir -p "${dest}" && cp -r ${src}/. "${dest}"`, { stdio: "inherit" });
}

// 1) static admin -> .vercel/output/static/admin
const medusaClient = path.join(__dirname, ".medusa", "client");
const staticAdminDest = path.join(__dirname, ".vercel", "output", "static", "admin");

copyDir(medusaClient, staticAdminDest);

// 2) ensure api folder exists in output (we will rely on api/index.js at repo root for the function)
// create minimal config (optional)
const configDir = path.join(__dirname, ".vercel", "output", "config");
if (!fs.existsSync(configDir)) fs.mkdirSync(configDir, { recursive: true });

console.log("vercel-build: copied admin to .vercel/output/static/admin");
