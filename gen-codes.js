// ---------------------------------------------------------------
// LOCAL UTILITY — not part of the shipped site.
// 1) Run with `node gen-codes.js`.
// 2) Keep the plaintext list offline. NEVER commit the plaintext
//    output (codes.txt / codes.csv are git-ignored).
// 3) Only the SHA-256 hashes go into the page.
// ---------------------------------------------------------------
const crypto = require('crypto');

// ===== config =====
const COUNT = 20;   // how many codes to generate
const PREFIX = "TO-";
const SEG_LEN = 6;  // chars per segment: TO-XXXXXX-XXXXXX (12 random chars, ~2^60 space)
const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O, no 1/I

// CSPRNG instead of Math.random, so the sequence is not predictable
function randomStr(len) {
  let s = "";
  while (s.length < len) {
    const b = crypto.randomBytes(len * 2);
    for (let i = 0; i < b.length && s.length < len; i++) {
      // discard bytes above the largest multiple of the alphabet size to avoid modulo bias
      if (b[i] < 256 - (256 % CHARS.length)) {
        s += CHARS[b[i] % CHARS.length];
      }
    }
  }
  return s;
}

function sha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

const resultPlain = [];
const resultHash = [];

for (let i = 0; i < COUNT; i++) {
  const code = PREFIX + randomStr(SEG_LEN) + "-" + randomStr(SEG_LEN);
  const h = sha256(code);
  resultPlain.push(code);
  resultHash.push(`"${h}"`);
}

console.log("===== PLAINTEXT CODES (send to buyers; keep offline, never commit) =====");
console.log(resultPlain.join("\n"));
console.log("\n===== VALID_CODE_HASHES array (paste into the page) =====");
console.log(`const VALID_CODE_HASHES = [\n  ${resultHash.join(",\n  ")}\n];`);
