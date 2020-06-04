import { blue, green, red } from 'https://deno.land/std/fmt/colors.ts';

const LOADING_TIME: number = 5.23; // seconds

init();

/**
 * The entry point of the module.
 */
function init() {
  // Check package to install
  const packageName = Deno.args[0];
  if (!packageName) {
    console.error(
      red('Did you forget to specify the name of package you want to install?')
    );
    Deno.exit(1);
  }

  // Start the loading animation
  const timer = startTwirlTimer();

  // Stop the loading animation after LOADING_TIME and display the results
  setTimeout(() => {
    clearInterval(timer);
    showBogusResult(packageName);
  }, LOADING_TIME * 1000);
}

/**
 * Prints out a twirling animation to console that indicates a loading action.
 * Returns a timer id that can be used later to stop the animation using `clearInterval`.
 */
function startTwirlTimer(): number {
  const chars = ['\\', '|', '/', '-'];
  let i = 0;
  return setInterval(() => {
    writeToStdout(chars[i++]);
    i %= chars.length;
  }, 250);
}

/**
 * Displays bogus information about installed packages
 */
function showBogusResult(packageName: string): void {
  const now = new Date();
  const nowAsHHMM = `${now.getHours()}${now.getMinutes()}`;

  writeToStdout(''); // clear the console (sort of)

  console.log(`+ ${packageName}@4.43.0`);
  console.log(
    `✨ added ${blue(nowAsHHMM)} packages in ${green(
      LOADING_TIME.toString()
    )} secs`
  );
}

/**
 * Writes the given string to standard output.
 * Similar to Node's `process.stdout.write`.
 */
function writeToStdout(str: string) {
  const s = new TextEncoder().encode('\r' + str);
  Deno.stdout.writeSync(s);
}
