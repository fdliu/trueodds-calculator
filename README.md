# TrueOdds — Odds & Expected Value Calculator

**The honest odds & EV tool.** TrueOdds shows your real odds and expected value (EV) for Powerball, Mega Millions and EuroMillions — with no fake "winning predictions," because no tool can predict an independent random draw.

A single-file, zero-dependency web app that runs entirely in your browser. Nothing to build, nothing to install.

**Live demo:** https://fdliu.github.io/trueodds-calculator/

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
| `calculator.html` | The single-file calculator app (all CSS + JS inline). |
| `index.html` | Landing page with pricing and checkout links. |
| `sw.js` | PWA service worker for offline caching. |
| `gen-codes.js` | Local utility that generates activation codes and their SHA-256 hashes. |

## Run it

Open `calculator.html` in any modern browser — no server, no build step.

### PWA (install + offline)

1. Serve the folder over **HTTPS** (or `localhost`).
2. Keep `sw.js` in the **same directory** as the HTML files.
3. Open the page and install it from the browser menu.

> Double-clicking `file://` works for the app itself, but browsers block service workers on `file://`, so PWA features need HTTPS/localhost. Static hosts such as GitHub Pages, Netlify or Vercel work out of the box.

## Tech

- Plain HTML + CSS + vanilla JavaScript, all inlined in one file.
- Zero dependencies, no framework, no bundler, no backend.
- Data is inlined into the JS (a `file://` page cannot `fetch` local files).

## How the math works

- `C(n, k)` — combinations, `n! / (k! · (n-k)!)`.
- Match probability per ball set — hypergeometric: `P(exactly x) = C(pick, x) · C(total-pick, pick-x) / C(total, pick)`.
- Prize tier probability — main and bonus draws are independent: `P(tier) = P(main, x) · P(bonus, y)`.
- Odds — `1 / P(tier)`.
- Jackpot EV with Poisson prize splitting — `EV_jackpot = J · (1 − e^(−N·p)) / N`.
- Total EV — `EV_jackpot + Σ(tier prize × tier probability) − ticket price`.

## Data sources

- **Draw history** (`DRAWS` inside the HTML) is real recent data from `powerball.com` and `national-lottery.com`, inlined so the tool works offline.
- **Jackpot trend** currently uses **sample data** (clearly labeled in the UI). Replace it with a live jackpot feed, or import your own CSV (`date,jackpot`).
- The tool makes **no predictions** and does not claim hot/cold numbers change future odds — draws are independent.

## Pro access

Pro features are unlocked by an activation code. The page ships only SHA-256 **hashes** of valid codes, never the plaintext codes, and the check runs locally in your browser.

Codes are issued with a purchase. If you bought Pro and lost your code, use the contact address on the landing page.

## Privacy

Everything runs client-side. No account, no server, no analytics, no tracking. Saved number sets live in your own browser's `localStorage` and never leave the device.

## License

All rights reserved. This repository is public for transparency and review. No open-source license is granted: copying the code into another product, redistributing it, or reselling it requires prior written permission.

## Disclaimer

Entertainment and educational use only. Not affiliated with or endorsed by Powerball, Mega Millions, EuroMillions, or any game operator. 18+. Play responsibly. The tool does not predict results or improve your odds.
