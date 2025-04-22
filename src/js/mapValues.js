import { map } from "@weborigami/async-tree";

const temperatures = [
  { city: "Portland", celsius: 21 },
  { city: "San Francisco", celsius: 16 },
  { city: "Seattle", celsius: 24 },
];

// Add a Fahrenheit property to each temperature reading
export default map(temperatures, (reading) => ({
  ...reading,
  fahrenheit: 32 + (9 * reading.celsius) / 5,
}));
