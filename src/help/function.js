// function.js

import { FunctionTree } from "@weborigami/async-tree";

// Wrap an object to create an async tree.
export default new FunctionTree(
  (key) => `Hello, ${key}.`,
  ["Alice", "Bob", "Carol"]
);
