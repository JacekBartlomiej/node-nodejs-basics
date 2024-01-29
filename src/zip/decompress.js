import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";

const pipe = promisify(pipeline);
const sourcePath = "./src/zip/files/archive.gz";
const destinationPath = "./src/zip/files/fileToCompress.txt";
const errorMessage = "Decompress operation failed";

const decompress = async () => {
  try {
    const unzip = createGunzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);
    await pipe(source, unzip, destination);
  } catch {
    throw new Error(errorMessage);
  }
};

await decompress();
