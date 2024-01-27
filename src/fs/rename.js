import { stat, rename as fsRename } from "node:fs/promises";

const oldPath = "./src/fs/files/wrongFilename.txt";
const newPath = "./src/fs/files/properFilename.md";
const errorMessage = "FS operation failed";

const rename = async () => {
  try {
    await stat(newPath);
    throw new Error(errorMessage);
  } catch (err) {
    if (err.code === "ENOENT") {
      try {
        await fsRename(oldPath, newPath);
      } catch(err) {
        throw new Error(errorMessage);
      }
    } else {
      throw new Error(errorMessage);
    }
  }
};

await rename();
