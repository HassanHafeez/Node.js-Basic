// console.log(process.argv); // print array having path of filename and directory.

console.log("-------------------\n");

const grab = (flag) => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag] ? process.argv[indexAfterFlag] : null;
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);
