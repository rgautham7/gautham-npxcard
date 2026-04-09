import figlet from 'figlet';
import gradient from 'gradient-string';

export function renderNameArt() {
  const art = figlet.textSync('R  Gautham', {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  });

  const colored = gradient(['#f953c6', '#b91d73', '#4776e6', '#8e54e9', '#43cea2'])(art);
  console.log(colored);
}

export function renderTagline() {
  const tagline = gradient(['#43cea2', '#185a9d'])(
    '  ✦  Full Stack Developer  ·  Builder  ·  Creating things that lives  ✦  '
  );
  console.log(tagline);
  console.log();
}

export async function runMarquee(durationMs = 2800) {
  const text =
    '  ✦  Software Developer  ·  Currently Employed  ·  Building cool things  ·  Let\'s connect!  ✦  ';
  const width = process.stdout.columns || 80;
  let pos = 0;

  return new Promise((resolve) => {
    const interval = setInterval(() => {
      const display = (text + text).substring(pos, pos + width);
      process.stdout.write('\r' + gradient(['#f953c6', '#4776e6', '#43cea2'])(display));
      pos = (pos + 1) % text.length;
    }, 60);

    setTimeout(() => {
      clearInterval(interval);
      process.stdout.write('\r' + ' '.repeat(width) + '\r');
      resolve();
    }, durationMs);
  });
}