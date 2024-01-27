import { cp } from "node:fs/promises";

const srcPath = "./src/fs/files";
const destPath = "./src/fs/files_copy";
const errorMessage = "FS operation failed";

const copy = async () => {
    try {
        await cp(srcPath, destPath, {force: false, errorOnExist: true, recursive: true});
    } catch {
        throw new Error(errorMessage);
    }
};

await copy();
