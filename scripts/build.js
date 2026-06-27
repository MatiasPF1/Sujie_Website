const fs = require("fs");
const path = require("path");

const root = process.cwd();
const dist = path.join(root, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

fs.copyFileSync(path.join(root, "index.html"), path.join(dist, "index.html"));
fs.copyFileSync(path.join(root, "styles.css"), path.join(dist, "styles.css"));
fs.cpSync(path.join(root, "public"), path.join(dist, "public"), {
  recursive: true
});
