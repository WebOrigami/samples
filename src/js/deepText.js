import { deepText } from "@weborigami/async-tree";

const object = {
  Alice: "Hello, Alice!",
  Bob: "Hello, Bob!",
  Carol: "Hello, Carol!",
};

const text = await deepText`${object}`;
export default text;
