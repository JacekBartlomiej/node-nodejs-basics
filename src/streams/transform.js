import { compose, Transform } from 'node:stream';

const reversesText = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, String(chunk).split("").reverse().join(""));
    },
  });

const transform = async () => {
    compose(process.stdin, reversesText).pipe(process.stdout)
};

await transform();