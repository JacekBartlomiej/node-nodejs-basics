import { readFile } from "node:fs/promises";

const path = "./src/fs/files/fileToRead.txt";
const errorMessage = "FS operation failed";

const read = async () => {
    try {
        const fileContent = await readFile(path, { encoding: 'utf8' });
        console.log(fileContent);
      } catch {
        throw new Error(errorMessage);
      }
};

await read();