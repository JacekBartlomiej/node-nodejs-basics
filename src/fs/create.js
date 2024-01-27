import { stat, writeFile } from "node:fs/promises";

//TODO: check how to do it with relative file path
const path = "./src/fs/files";
const fileName = "message.txt";

const create = async () => {
  try {
    await stat(`${path}/${fileName}`);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      try {
        await writeFile(`${path}/${fileName}`, "I am fresh and young", "utf8");
      } catch (err) {
        throw new Error("FS operation failed");
      }
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await create();
