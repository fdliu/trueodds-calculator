# 概率与 EV 工具 · 产品方案与英文落地页文案

## 一、核心算法公式

已内嵌在 `calculator.html` 的 JS 注释里，这里给出数学表述：

- 组合数：`C(n, k) = n! / (k! · (n-k)!)`
- 命中概率：`P(恰好命中 x 个) = C(选, x) · C(总-选, 选-x) / C(总, 选)`
- 奖级概率：`P(奖级) = P(主号, x) · P(特别号, y)`（主号与特别号相互独立）
- 赔率：`Odds = 1 / P(奖级)`
- 头奖期望值（多人分奖 Poisson 模型）：`EV_jackpot = J · (1 − e^(−N·p)) / N`
- 总期望值：`EV = EV_jackpot + Σ(P_奖级 · 奖金) − 票价`

## 二、英文 Landing Page 结构与文案

> 这是"销售/官网"用的营销文案，与工具内 UI 文案是两套，不要混用。

### Hero
- H1：`Know Your Real Odds Before You Buy a Ticket`
- Sub：`The odds & expected-value calculator that tells you the truth — no fake "winning predictions."`
- CTA 按钮：`Try the free calculator`

### How it works（三步）
1. Pick your game — Powerball, Mega Millions, EuroMillions, or custom.
2. See the exact odds of every prize tier, in plain numbers.
3. Check the expected value of one ticket before you spend.

### Features（三张卡）
- **Odds calculator** — the exact probability of every prize tier, not vague percentages.
- **Expected value** — is a ticket actually worth buying? We do the math for you.
- **Quick pick** — fast random numbers, clearly labeled as random.

### 诚实宣言（核心差异化卖点）
- 标题：`If a tool promises to predict the next draw, it is lying to you.`
- 正文：`Draws are independent. No "AI" can see the future. We show your real odds and expected value instead — because that is the only honest number a player can know.`

### Pricing
- Free：odds calculator + quick pick（引流 + 收邮箱）
- Pro（$24 lifetime）：完整 EV 工具 + 全部游戏 + 保存号码 + 去广告 + 30 天退款保证

### FAQ（示例）
- Q：Can this improve my odds of winning? A：No. Nothing can. It shows your real odds and whether the math favors buying a ticket.
- Q：Is this affiliated with Powerball or Mega Millions? A：No. It is an independent tool, not endorsed by any game operator.
- Q：Why does EV matter? A：It tells you the average value of one ticket. Most draws are negative EV; only a very large jackpot can briefly flip it positive.
- Q：Which games are supported? A：Powerball, Mega Millions, EuroMillions, plus custom games.
- Q：Refunds? A：30-day money-back guarantee.

### Footer / Disclaimer
`Entertainment only. Not affiliated with or endorsed by any game operator. 18+. Play responsibly.`

## 三、定价建议

| 层级 | 价格 | 作用 |
|---|---|---|
| Free | 免费 | 引流 + 收邮箱 |
| Pro 一次性 | $24 | 对标 Lotto Pro 的 $24.95 |
| 源码（Gumroad/CodeCanyon） | $49–99 | 卖给想二开/二次销售的开发者 |

## 四、下一步

1. 用这个 HTML 先上免费版，挂域名跑 SEO。
2. 配上面的 Landing Page 收邮箱、验证需求。
3. 源码挂 Gumroad，一份代码两处收钱。
4. 有流量后再加 Pro 付费墙 / 订阅。
