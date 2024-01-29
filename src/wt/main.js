import os from "os";
import { Worker } from "node:worker_threads";
import { ReadableStreamDefaultController } from "node:stream/web";

const cpus = os.cpus();
const filePath = "./src/wt/worker.js";

const performCalculations = async () => {
  const workersLength = cpus.length;
  let workersCompletedLength = 0;
  const resultArr = [];
  cpus.forEach((cpu, i) => {
    const worker = new Worker(filePath);
    const data = i + 10;
    worker.postMessage(data);
    worker.on("message", (result) => {
      resultArr[i] = result;
      workersCompletedLength++;
      if(workersLength === workersCompletedLength) {
        console.log(resultArr);
      }
    });
  });
};

await performCalculations();
