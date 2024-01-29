import { unlink } from "node:fs/promises";

const path = "./src/fs/files/fileToRemove.txt";
const errorMessage = "FS operation failed";

const remove = async () => {
  try {
    await unlink(path);
  } catch {
    throw new Error(errorMessage);
  }
};

await remove();
