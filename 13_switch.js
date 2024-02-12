/*

The switch statement consists of one or more case 
blocks and may include an optional default block.

The switch keyword initiates the statement 
and is followed by an expression inside parentheses.
Each case keyword represents a possible 
value for the expression.
If the expression matches a case value, 
the associated block of code executes.
The break statement exits the switch 
block once a case is matched and executed.
If no case matches the expression, the default 
block, if present, executes.
The default block serves as a catch-all for 
cases not explicitly handled by preceding case blocks.

switch (expression) {
  case value1:
    // code block executed if expression equals value1
    break;
  case value2:
    // code block executed if expression equals value2
    break;
  // additional cases as needed
  default:
    // code block executed if expression does not match any case
}




*/

let result = 10 - 6; // 10 - 6 equals 4

switch (result) {
  case 3:
    console.log("Very easy");
    break;
  case 4:
    console.log("Easy!");
    break;
  case 5:
    console.log("Oky");
    break;
  default:
    console.log("Tough");
}

//If there is no break statement, the execution continues with the next case without performing any additional checks.

let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("This is a banana.");
  case "apple":
    console.log("This is an apple."); // This line will execute
  // No break statement, so execution falls through to the next case
  case "orange":
    console.log("This is an orange."); // This line will also execute
    break; // Break statement to end the switch statement
  default:
    console.log("This is an unknown fruit.");
}

//Grouping of cases

let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;

  case "Tuesday": // (*) Grouping two cases
  case "Wednesday":
  case "Thursday":
    console.log("Midweek days.");
    break;

  case "Friday":
    console.log("EOW!");
    break;

  default:
    console.log("Weekend vibes!");
}

/*

It's important to note that the equality check in JavaScript switch statements
 is always strict. This means that the values must be of the same type to match.
*/
