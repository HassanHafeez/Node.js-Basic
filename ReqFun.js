const path= require("path");

console.log(__dirname); //Print or directed folder name
// console.log(__filename); // print or directed at the file

console.log(
    `The file name is ${path.basename(__filename)}.`
)
