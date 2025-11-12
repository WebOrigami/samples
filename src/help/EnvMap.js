import process from "node:process";

export default class EnvMap extends Map {
  // Get a specific environment variable
  get(key) {
    return process.env[key];
  }

  // Return the set of environment variable names
  *keys() {
    yield* Object.keys(process.env);
  }
}
