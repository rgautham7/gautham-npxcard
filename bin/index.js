#!/usr/bin/env node

import chalk from 'chalk';
import ora from 'ora';
import { renderNameArt, renderTagline, runMarquee } from '../src/art.js';
import { renderCard } from '../src/card.js';
import { runMenu } from '../src/actions.js';

async function main() {
  console.clear();
  console.log();

  // 1. Intro spinner
  const spinner = ora({
    text: chalk.magenta('Loading Gautham\'s card...'),
    spinner: 'dots2',
    color: 'magenta',
  }).start();

  await new Promise((r) => setTimeout(r, 900));
  spinner.stop();
  console.clear();
  console.log();

  // 2. ASCII name art
  renderNameArt();
  console.log();

  // 3. Scrolling marquee
  await runMarquee(2800);

  // 4. Tagline
  renderTagline();

  // 5. Info card
  renderCard();

  // 6. Interactive menu
  await runMenu();
}

main().catch((err) => {
  console.error(chalk.red('\nSomething went wrong:'), err.message);
  process.exit(1);
});