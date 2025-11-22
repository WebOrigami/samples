import { toString } from "@weborigami/async-tree";

export default {
  mediaType: "application/json",

  unpack: (packed) => {
    const text = toString(packed);
    return JSON.parse(text);
  },
};
