function log(message) {
  console.log(message);
}

var message = "Hello World";

log(message);

let count = 5;
count = "a"; // this will trigger error of changing type

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {
  Red, // automatically sets the value 0 for this
  Green, // but it's better to explicitly set the values
  Blue,
}

let backgroundColor = Color.Blue;

let message = 'abc'
message.