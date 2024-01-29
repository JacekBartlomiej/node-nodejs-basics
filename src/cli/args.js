import { parseArgs as nodeParseArgs } from "node:util";

const parseArgs = () => {
  const options = {
    "some-arg": {
      type: "string",
    },
    other: {
      type: "string",
    },
    arg2: {
      type: "string",
    },
  };
  const { tokens } = nodeParseArgs({ options, tokens: true });
  const formattedOptions = tokens
    .filter((token) => token.kind === "option")
    .map((token) => `${token.name} is ${token.value}`)
    .join(", ");
  console.log(formattedOptions);
};

parseArgs();
