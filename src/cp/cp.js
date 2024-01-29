import { spawn } from "node:child_process";

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", ["src/cp/files/script.js", ...args]);

  childProcess.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  childProcess.stdin.write("main-message-stdio");
  setTimeout(() => {
    childProcess.stdin.write("CLOSE");
  }, 100)

  childProcess.on("exit", (code) => {
    console.log(`Child exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["cos", "jeszcze", "innego"]);
