import inquirer from 'inquirer';
import chalk from 'chalk';
import open from 'open';
import ora from 'ora';

const RESUME_URL    = 'https://drive.google.com/file/d/1aBl2IYIgt_bExuDYE9riS3UN0WEqegKS/view?usp=drive_link';
const PORTFOLIO_URL = 'https://personal-portfolio-two-sooty.vercel.app/ ';
const EMAIL         = 'gauthamramesh93442@gmail.com';

const ACTIONS = [
  {
    name: `${chalk.greenBright('↵')}  Download Resume          ${chalk.dim('Opens in browser')}`,
    value: 'resume',
  },
  {
    name: `${chalk.cyanBright('↵')}  Go to Portfolio          ${chalk.dim('rgautham.dev')}`,
    value: 'portfolio',
  },
  {
    name: `${chalk.yellowBright('↵')}  Send an Email            ${chalk.dim('Open mail client')}`,
    value: 'email',
  },
  {
    name: `${chalk.dim('↵')}  Exit`,
    value: 'exit',
  },
];

async function handleAction(action) {
  switch (action) {
    case 'resume': {
      const spinner = ora({
        text: chalk.green('Opening resume...'),
        color: 'green',
      }).start();
      await open(RESUME_URL);
      spinner.succeed(chalk.greenBright('Resume opened in your browser!'));
      break;
    }

    case 'portfolio': {
      const spinner = ora({
        text: chalk.cyan('Launching portfolio...'),
        color: 'cyan',
      }).start();
      await open(PORTFOLIO_URL);
      spinner.succeed(chalk.cyanBright('Portfolio opened → rgautham.dev'));
      break;
    }

    case 'email': {
      const spinner = ora({
        text: chalk.yellow('Opening mail client...'),
        color: 'yellow',
      }).start();
      await open(`mailto:${EMAIL}?subject=Hey Gautham!&body=Hi Gautham!, I came across your card and wanted to connect.`);
      spinner.succeed(chalk.yellowBright(`Mail client opened → ${EMAIL}`));
      break;
    }

    case 'exit': {
      console.log();
      console.log(chalk.magenta('  Thanks for stopping by. Let\'s build something great together! 🚀'));
      console.log(chalk.dim('  — Gautham\n'));
      process.exit(0);
    }
  }
}

export async function runMenu() {
  console.log(chalk.dim('  Use arrow keys to navigate · Press Enter to select\n'));

  let keepGoing = true;

  while (keepGoing) {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: chalk.white('What would you like to do? (Type resume/portfolio/email to navigate -)'),
        choices: ACTIONS,
        pageSize: 4,
      },
    ]);

    console.log();
    await handleAction(action);
    console.log();

    if (action === 'exit') {
      keepGoing = false;
    } else {
      // After any action, let the menu loop back so user can do more
      const { again } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'again',
          message: chalk.dim('Back to menu?'),
          default: true,
        },
      ]);
      keepGoing = again;
      if (!keepGoing) {
        console.log(chalk.magenta('\n  Thanks for stopping by! 🚀\n'));
        process.exit(0);
      }
      console.log();
    }
  }
}