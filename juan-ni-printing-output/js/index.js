let a = 3;
let b = 5;
let c;

let result = "let a = 3;" +
    "\n" +
    "let b = 5;" +
    "\n" +
    "let c;" +
    "\n" +
    "------------" +
    "\n" +
    "a + b = " + (a + b) +
    "\n" +
    "a - b = " + (a - b) +
    "\n" +
    "a * b = " + (a * b) +
    "\n" +
    "a / b = " + (a / b) +
    "\n" +
    "a % b = " + (a % b) +
    "\n" +
    "(a += b): " + (a += b) +
    "\n" +
    "(a -= b): " + (a -= b) +
    "\n" +
    "(a *= b): " + (a *= b) +
    "\n" +
    "(a /= b): " + (a /= b) +
    "\n" +
    "(a %= b): " + (a %= b) +
    "\n" +
    "(a == b): " + (a == b) +
    "\n" +
    "(a != b): " + (a != b) +
    "\n" +
    "(a > b): " + (a > b) +
    "\n" +
    "(a < b): " + (a < b) +
    "\n" +
    "(!a && !c): " + (!a && !c) +
    "\n" +
    "(!a || !c): " + (!a || !c);

alert(result);


let first_name = "Juan";
let last_name = "Ni";
let email = "ni000011@algonquinlive.com";
let output;

output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";

alert(output);
