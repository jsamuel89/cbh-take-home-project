const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns length 128 when given any numerical input", () => {
    const trivialKey = deterministicPartitionKey(0.6);
    expect(trivialKey.length).toBe(128);
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns length 128 when given input is a Object without partitionKey", () => {
    const trivialKey = deterministicPartitionKey({someRandomKey: '121'});
    expect(trivialKey.length).toBe(128);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns input.partitionKey when given a Object with partitionKey and its length<254", () => {
    let input = {
      partitionKey : '121'
    }
    let trivialKey = deterministicPartitionKey(input);
    if(input.partitionKey.length <= 256) {
      expect(trivialKey).toBe(input.partitionKey);
    }
    else {
      expect(trivialKey).not.toBe(input.partitionKey);
    }
    input = {
      partitionKey : 'fa200cd21e01d1893ac8f616234efcb7057f8d52a4cecbf0798c5582b706ffb889439ca95fe6c581673ca3cd10ca01e74adbc6183fa5f681258e5cd5cc75dee3fa200cd21e01d1893ac8f616234efcb7057f8d52a4cecbf0798c5582b706ffb889439ca95fe6c581qwerqewqweqwe673ca3cd10ca01e74adbc6183fa5f681258e5cd5cc75dee3'
    }
    trivialKey = deterministicPartitionKey(input);
    if(input.partitionKey.length <= 256) {
      expect(trivialKey).toBe(input.partitionKey);
    }
    else {
      expect(trivialKey).not.toBe(input.partitionKey);
    }
  });
});
