// function.js

import { FunctionMap } from "@weborigami/async-tree";

// Wrap an object to create a map.
export default new FunctionMap(
  (key) => `Hello, ${key}.`,
  ["Alice", "Bob", "Carol"]
);
