//  75.25, 65, 80, 35.45, 99.50
// Mathematics, Biology, Chemistry, Physics, Bangla
var mathMarks = 75.25;
var biologyMarks = 65;
var ChemistryMarks = 80;
var PhysicsMarks = 35.45;
var BanglaMarks = 99.50;


var totalMarks = mathMarks + biologyMarks + ChemistryMarks + PhysicsMarks + BanglaMarks;

console.log(totalMarks);

var average = totalMarks / 5;
var averageTowDecimal = average.toFixed(2);
console.log(averageTowDecimal);