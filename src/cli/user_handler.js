import { toString } from "@weborigami/origami";

export default {
  mediaType: "application/json",

  unpack: (packed) => {
    const text = toString(packed);
    return JSON.parse(text);
  },
};
