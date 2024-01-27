import { stat, writeFile } from "node:fs";

const path = "./src/fs/files";
const fileName = "message.txt";

const create = async () => {
  stat(`${path}/${fileName}`, (err, stats) => {
    if (stats) {
      throw new Error("FS operation failed");
    } else if (err.code === "ENOENT") {
      writeFile(
        `${path}/${fileName}`,
        "I am fresh and young",
        "utf8",
        (err, result) => {
          if (err) {
            throw new Error("FS operation failed");
          } else {
            console.log(`The file has been saved with result: ${result}!`);
          }
        }
      );
    }
  });
};

await create();
