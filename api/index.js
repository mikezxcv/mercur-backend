// api/index.js
const { startMedusa } = require("@medusajs/medusa/dist");
const path = require("path");

(async () => {
  const projectRoot = path.join(__dirname, "../");
  process.env.NODE_ENV = process.env.NODE_ENV || "production";

  try {
    console.log("🚀 Starting Medusa backend on Vercel...");
    await startMedusa({
      directory: projectRoot,
    });
  } catch (err) {
    console.error("❌ Failed to start Medusa:", err);
    process.exit(1);
  }
})();
