// When the ori CLI invokes this function, `this` will be the current scope.
export default async function accessScope() {
  // Read the sample.txt file from scope.
  const sample = await this.get("sample.txt");
  return sample;
}
