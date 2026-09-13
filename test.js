const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");
const required = ["DevOps Training", "CI/CD Deployment Successful", "Version:", "Deployed automatically using GitHub Actions"];
const missing = required.filter((s) => !html.includes(s));
if (missing.length) { console.error("Missing required copy:", missing.join(", ")); process.exit(1); }
console.log("Content checks passed.");
