import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";

const pipe = promisify(pipeline);
const sourcePath = "./src/zip/files/fileToCompress.txt";
const destinationPath = "./src/zip/files/archive.gz";
const errorMessage = "Compress operation failed";

const compress = async () => {
  try {
    const gzip = createGzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);
    await pipe(source, gzip, destination);
  } catch {
    throw new Error(errorMessage);
  }
};

await compress();
