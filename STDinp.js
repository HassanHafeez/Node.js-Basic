/*This is Standard input and Standard output
these two objects offers us a way to communicate with process while it's running.
*/

process.stdout.write("Hello  \n \n")

const questions = [
    "what is your name?",
    "what is your gender?",
    "where are you from?"
];

const answers = []; //This empty array is intended to store the user's answers.

const ask=(i)=>{
    process.stdout.write(`\n\n ${questions[i]}.`)
    process.stdout.write(`> `)
};

//Data Event Listener
/*When data is received (when the user presses Enter), it converts the data to a string, trims any leading or trailing whitespace, and writes it back to the standard output. */

process.stdin.on("data", (data) => {
    answers.push(data.toString().trim()); //pushing data to answer array

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.stdout.write("\nThank you for your answers.\n");
        process.stdout.write(`Your answers: ${JSON.stringify(answers)}\n`);
        process.exit();
    }
});


//Initial Question Prompt
ask(answers.length);
