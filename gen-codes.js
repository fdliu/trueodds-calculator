// ---------------------------------------------------------------
// LOCAL UTILITY — not part of the shipped site.
// 1) Run with `node gen-codes.js`.
// 2) Keep the plaintext list offline. NEVER commit the plaintext
//    output (codes.txt / codes.csv are git-ignored).
// 3) Only the SHA-256 hashes go into the page.
// ---------------------------------------------------------------
const crypto = require('crypto');

// ===== 配置 =====
const COUNT = 20;   // 生成多少个激活码，按需修改
const PREFIX = "TO-";
const SEG_LEN = 6;  // 每段长度：TO-XXXXXX-XXXXXX（12 位随机，约 2^60 种，抗暴力枚举）
const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // 去掉易混淆的 0/O、1/I

// 用 CSPRNG 而不是 Math.random，避免可预测的随机源
function randomStr(len) {
  let s = "";
  while (s.length < len) {
    const b = crypto.randomBytes(len * 2);
    for (let i = 0; i < b.length && s.length < len; i++) {
      // 只取落在字母表整数倍区间内的字节，避免取模偏置
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

console.log("===== 明文激活码（发给客户，自己单独保存，勿提交到仓库） =====");
console.log(resultPlain.join("\n"));
console.log("\n===== VALID_CODE_HASHES 数组（复制进 index.html） =====");
console.log(`const VALID_CODE_HASHES = [\n  ${resultHash.join(",\n  ")}\n];`);
