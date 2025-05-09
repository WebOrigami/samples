import { text } from "@weborigami/async-tree";

const object = {
  Alice: "Hello, Alice!",
  Bob: "Hello, Bob!",
  Carol: "Hello, Carol!",
};

export default await text`${object}`;
