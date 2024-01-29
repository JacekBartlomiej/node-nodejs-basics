import { createReadStream } from "node:fs";
import { stdout } from 'node:process';

const filePath = "./src/streams/files/fileToRead.txt";

const read = async () => {
    try {
        const stream = await createReadStream(filePath);
        stream.pipe(stdout);
    } catch(err) {
        throw new Error(err);
    }
};

await read();
