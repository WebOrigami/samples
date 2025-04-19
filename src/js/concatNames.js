import { concatTrees } from "@weborigami/async-tree";

const object = {
  Alice: "Hello, Alice!",
  Bob: "Hello, Bob!",
  Carol: "Hello, Carol!",
};

const text = await concatTrees`${object}`;
export default text;
