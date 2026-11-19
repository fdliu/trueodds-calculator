const crypto = require('crypto');

// ===== 配置 =====
const COUNT = 20;   // 生成多少个激活码，按需修改
const PREFIX = "TO-";
const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // 去掉易混淆的 0/O、1/I

function randomStr(len) {
  let s = "";
  for (let i = 0; i < len; i++) {
    s += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return s;
}

function sha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

const resultPlain = [];
const resultHash = [];

for (let i = 0; i < COUNT; i++) {
  const code = PREFIX + randomStr(4) + "-" + randomStr(4);
  const h = sha256(code);
  resultPlain.push(code);
  resultHash.push(`"${h}"`);
}

console.log("===== 明文激活码（发给客户，自己单独保存，勿提交到仓库） =====");
console.log(resultPlain.join("\n"));
console.log("\n===== VALID_CODE_HASHES 数组（复制进 index.html） =====");
console.log(`const VALID_CODE_HASHES = [\n  ${resultHash.join(",\n  ")}\n];`);
