/*This is Standard input and Standard output
these two objects offers us a way to communicate with process while it's running.
*/

process.stdout.write("Hello  \n \n")

const questions = [
    "what is your name?",
    "what is your gender?",
    "where are you from?"
];

const answer = []; //This empty array is intended to store the user's answers.

const Ask=(i=0)=>{
    process.stdout.write(`\n${questions[i]}.`)
    process.stdout.write(`> `)
};

//Data Event Listener
/*When data is received (when the user presses Enter), it converts the data to a string, trims any leading or trailing whitespace, and writes it back to the standard output. */


//Initial Question Prompt
Ask();

process.stdin.on("data",(data)=>{
    answer.push(data.toString().trim())

    if (answer.length<questions.length){
        Ask(answer.length)
    }else{
     process.exit();
    }
})

//Printing all Results
process.on("exit",()=>{
    process.stdout.write("----------\n\n--------")
    process.stdout.write(`\nAnswer are: \n Name: ${answer[0]}, Gender: ${answer[1]}, Location: ${answer[2]}.`)
})
