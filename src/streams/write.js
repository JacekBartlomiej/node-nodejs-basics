import process from 'node:process';
import { createWriteStream } from "node:fs";

const filePath = "./src/streams/files/fileToWrite.txt";

const write = async () => {
    try {
        const writable = createWriteStream(filePath);
        process.stdin.on('data', data => {
            writable.write(data);
        })
    } catch(err) {
        throw new Error(err);
    }
};

await write();