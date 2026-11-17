# TrueOdds — Lottery Odds & Expected Value Calculator

**The honest lottery tool.** TrueOdds shows your real odds and expected value (EV) for Powerball, Mega Millions and EuroMillions — with no fake "winning predictions," because no tool can predict an independent random draw.

This is a single-file, zero-dependency web app that runs entirely in the browser. Nothing to build, nothing to install.

## Features

- **Exact odds for every prize tier** — computed from the actual ball counts, not approximations.
- **Expected value (EV)** — jackpot EV with a Poisson prize-splitting model, after federal + state tax, with an "expected loss" visualization.
- **Lump sum vs annuity** — after-tax totals and net present value for a 30-year annuity.
- **State tax quick pick** — approximate top state rates in one dropdown.
- **Probability in perspective** — compare a tier's odds to lightning strikes, royal flushes, plane crashes and more.
- **Quick pick with filters** — random numbers, optionally avoiding birthday-heavy lines, 3+ consecutive numbers, or 3+ same last-digit.
- **Hot / cold / overdue numbers** — frequency stats from real draw history (Powerball & Mega Millions).
- **My Numbers** — check saved sets against the last N draws; multiple sets persist in localStorage; check all; import/export JSON.
- **Auto-check on open** — compares saved sets against the newest draw each time the page loads.
- **Jackpot / rollover trend** — chart with CSV import/export (sample data included; swap in a live feed).
- **Multi-ticket odds** — chance of hitting each tier at least once across N distinct tickets.
- **Game comparison** — Powerball vs Mega Millions vs EuroMillions side by side.
- **Custom game** — define your own ball counts and number ranges.
- **Responsive + PWA** — tables become cards on small screens; installable to your home screen; offline-capable.

## Supported games

| Game | Main | Bonus | Jackpot odds (1 in) |
|---|---|---|---|
| Powerball | 5 / 69 | 1 / 26 | 292,201,338 |
| Mega Millions | 5 / 70 | 1 / 24 | 290,472,336 |
| EuroMillions | 5 / 50 | 2 / 12 | 139,838,160 |
| Custom | — | — | computed |

## Files

| File | What it is |
|---|---|
| `lottery-odds-calculator.html` | The single-file calculator app (all CSS + JS inline). |
| `index.html` | Marketing / sales page with pricing and checkout links. |
| `sw.js` | PWA service worker for offline caching. |
| `product-plan.md` | Math formulas, English landing-page copy, and pricing rationale. |
| `seo-and-checkout.md` | SEO keyword strategy and payment-channel comparison. |

## Run it

Open `lottery-odds-calculator.html` in any modern browser — no server, no build step.

### PWA (install + offline)

For "Add to Home Screen" and offline mode:

1. Serve the folder over **HTTPS** (or `localhost`).
2. Keep `sw.js` in the **same directory** as the HTML files.
3. Open the page and install it from the browser menu.

> Double-clicking `file://` works for the app itself, but browsers block service workers on `file://`, so PWA features need HTTPS/localhost. Static hosts like GitHub Pages, Netlify, or Vercel work out of the box.

## Tech

- Plain HTML + CSS + vanilla JavaScript, all inlined in one file.
- Zero dependencies, no framework, no bundler, no backend.
- Data is inlined into the JS (the page cannot `fetch` local files under `file://`).

## How the math works

See `product-plan.md` for the full formulas. In short:

- `C(n, k)` combinations.
- Hypergeometric match probability per ball set.
- `Odds = 1 / P`.
- Jackpot EV uses a Poisson splitting model: `EV = J · (1 − e^(−N·p)) / N`.
- Total EV = jackpot EV + Σ(tier prize × tier probability) − ticket price.

## Data sources

- **Draw history** (`DRAWS` inside the HTML) is real recent data from `powerball.com` and `national-lottery.com`, inlined so the tool works offline.
- **Jackpot trend** currently uses **sample data** (clearly labeled in the UI). Production should replace it with a live jackpot feed, or users can import their own CSV (`date,jackpot`).
- The tool makes **no predictions** and does not claim hot/cold numbers change future odds — draws are independent.

## Pricing & licensing

One-time payment, lifetime access, 30-day money-back.

| Tier | Price | Includes |
|---|---|---|
| Free | $0 | Odds calculator, quick pick |
| Pro | $24 | Full EV tools, all games, saved numbers |
| Source code | $79 | This repository, for use in your own projects |

> This repo ships the full tool as a single file. The Free/Pro split above is the product packaging; it is not enforced by a paywall in the code.

### License

This source is **proprietary**. Access is for evaluation and personal use only. Commercial use, redistribution, or resale requires a purchased Source Code license. No open-source license is granted simply by having access to this repository.

## Disclaimer

Entertainment and educational use only. Not affiliated with or endorsed by Powerball, Mega Millions, EuroMillions, or any lottery operator. 18+. Play responsibly. The tool does not predict results or improve your odds.
