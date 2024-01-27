import { readdir } from "node:fs/promises";

const folderPath = "./src/fs/files";
const errorMessage = "FS operation failed";

const list = async () => {
  try {
    const files = await readdir(folderPath);
    console.log(files);
  } catch {
    throw new Error(errorMessage);
  }
};

await list();
