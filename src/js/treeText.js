import { Tree } from "@weborigami/async-tree";

const object = {
  Alice: "Hello, Alice!",
  Bob: "Hello, Bob!",
  Carol: "Hello, Carol!",
};

export default await Tree.text`${object}`;
