const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const hash = (data) => crypto.createHash("sha3-512").update(data).digest("hex");

exports.deterministicPartitionKey = (event) => {
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      data = JSON.stringify(event);
      candidate = hash(data);
    }
  }

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  return candidate.length > MAX_PARTITION_KEY_LENGTH ? hash(candidate) : candidate;
};
