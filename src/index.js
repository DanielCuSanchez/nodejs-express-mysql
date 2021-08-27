import app, { PORT } from "./app";

async function main() {
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}`);
}

main();
