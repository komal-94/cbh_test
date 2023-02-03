const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("returns the partitionkey if it exists", () => {
    const event = { partitionKey: "test" };
    expect(deterministicPartitionKey(event)).toEqual("test");
  });

  it("returns a hash of the event if partitionkey does not exist", () => {
    const event = { foo: "bar" };
    const result = deterministicPartitionKey(event);
    expect(typeof result).toEqual("string");
    expect(result.length).toBeGreaterThan(0);
  });

  it("returns a trivial partition key if event is undefined", () => {
    expect(deterministicPartitionKey()).toEqual("0");
  });

  it("returns a hash if the partition key is too long", () => {
    const event = { partitionKey: "x".repeat(257) };
    const result = deterministicPartitionKey(event);
    expect(typeof result).toEqual("string");
    expect(result.length).toBeLessThan(257);
  });
});
