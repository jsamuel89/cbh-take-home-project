const crypto = require("crypto");

// function deterministicPartitionKey(event){
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  if (candidate) {
    console.log('candidate: ' + candidate)
    console.log('Type ' + typeof candidate)
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  console.log('Length ' + candidate.length)

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};

// console.log( deterministicPartitionKey([0,2]) )
// console.log( deterministicPartitionKey({partitionKey:"2"}) )
// console.log( deterministicPartitionKey({partitionKey:'fa200cd21e01d1893ac8f616234efcb7057f8d52a4cecbf0798c5582b706ffb889439ca95fe6c581673ca3cd10ca01e74adbc6183fa5f681258e5cd5cc75dee3fa200cd21e01d1893ac8f616234efcb7057f8d52a4cecbf0798c5582b706ffb889439ca95fe6c581qwerqewqweqwe673ca3cd10ca01e74adbc6183fa5f681258e5cd5cc75dee3'}) )