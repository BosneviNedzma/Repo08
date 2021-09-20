// Only change code below this line
var sum = 0;
function addThree() {
    addThree = sum + 3;  
    console.log("addThree: " + addThree);
}
 addThree(3);
 function addFive() {
     addFive = sum + 5;
     console.log("addFive: " + addFive);
 }
 addFive(8);
// Only change code above this line
module.exports = {
    addThree,
    addFive
};