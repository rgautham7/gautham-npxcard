    import chalk from 'chalk';
    import boxen from 'boxen';
    import gradient from 'gradient-string';
    import figlet from 'figlet';

    export function renderCard() {
    const name    = `${chalk.bold.white('R Gautham')}`;
    const github  = `${chalk.dim('GitHub    :')}  ${chalk.cyan.underline('https://github.com/rgautham7')}`;
    const portfolio = `${chalk.dim('Portfolio :')}  ${chalk.magenta.underline('https://personal-portfolio-two-sooty.vercel.app/')}`;
    const email   = `${chalk.dim('Email     :')}  ${chalk.yellow('gauthamramesh93442@gmail.com')}`;
    const role    = `${chalk.dim('Role      :')}  ${chalk.greenBright('Full Stack Developer')}`;
    const status  = `${chalk.dim('Status    :')}  ${chalk.bgGreen.black(' Currently Employed @ Sedin ')}`;

    const divider = chalk.dim('─'.repeat(68));

    const bio = chalk.white.italic(
        '"A terminal window into the things I build and believe in."'
    );

    const content = [
        '',
        `  ${gradient(['#f953c6','#b91d73'])('Hello! This is some small digital footprint of mine!')}`,
        `  ${chalk.dim.italic('Less talk, more build')}`,
        '',
        divider,
        '',
        `  ${name}`,
        '',
        `  ${role}`,
        `  ${status}`,
        '',
        `  ${github}`,
        `  ${portfolio}`,
        `  ${email}`,
        '',
        divider,
        '',
        `  ${bio}`,
        '',
    ].join('\n');

    const box = boxen(content, {
        padding: 0,
        margin: { top: 0, bottom: 1, left: 2, right: 2 },
        borderStyle: 'round',
        borderColor: 'magenta',
        backgroundColor: '#0d0d0d',
        width: 70,
    });

    console.log(box);
    }