// A program that will be executed through command line

// Import the readline module to read input from the command line
const readline = require('readline');

// Create an interface for reading from the standard input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the initial welcome message
console.log('Welcome to Holberton School, what is your name?');

// Listen for the user to input their name
rl.on('line', (input) => {
  // Display the user's input
  console.log(`Your name is: ${input}`);

  // Close the readline interface
  rl.close();
});

// Display a closing message when the readline interface is closed
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
