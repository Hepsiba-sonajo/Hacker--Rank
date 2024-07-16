
/*Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format

Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
The operation will either be S (split) or C (combine)
M indicates method, C indicates class, and V indicates variable
In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
Output Format

For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).
Sample Input

S;M;plasticCup()

C;V;mobile phone

C;C;coffee machine

S;C;LargeSoftwareBook

C;M;white sheet of paper

S;V;pictureFrame

Sample Output

plastic cup

mobilePhone

CoffeeMachine

large software book

whiteSheetOfPaper()

picture frame

Explanation

Use Scanner to read in all information as if it were coming from the keyboard.

Print all information to the console using standard output (System.out.print() or System.out.println()).

Outputs must be exact (exact spaces and casing).*/

function processData(input){

    let inputArray = input.split(' ');
    for(let i=0; i< inputArray.length; i++){
        processInput(inputArray[i]);
    }

}

function processInput(input) {
    //Enter your code here
    var inputMethod = input.slice(0,4);
    let inputData = "";
    if(inputMethod === 'S;M;'){
         inputData = input.slice(4,-2);
        
        //join() returns an array as a string:
        var result = inputData.split(/(?=[A-Z])/).join(' ');
        var splitMethod = result.toLowerCase();
        console.log(splitMethod);
    } 
    else if(inputMethod === 'C;V;') {
         inputData = input.slice(4);
        let capitalizedStr = inputData
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    //return capitalizedStr;
        let output = capitalizedStr.split(' ').filter(word => word.length > 0).join('');
        let result = output.charAt(0).toLowerCase() + output.slice(1);
        console.log(result);
    }
    else if(inputMethod === 'C;C;'){
         inputData = input.slice(4);
        let capitalizedCLass = inputData
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        
        let classOutput = capitalizedCLass.split(' ').filter(word => word.length > 0).join('');
        console.log(classOutput);
    }
    else if(inputMethod === 'S;C;' ){
         inputData = input.slice(4);
        let result = "";
        for (let i = 0; i < inputData.length; i++) {
            if (inputData[i] >= 'A' && inputData[i] <= 'Z' && i > 0) {
                result += " ";
            }
            result += inputData[i];
            var splitClass = result.toLocaleLowerCase();
        }
        //return result;
        console.log(splitClass);
    }
    else if(inputMethod === 'C;M;' ){
         inputData = input.slice(4);
        let capitalizedMethod = inputData.split( ' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(' ');
        let methodOutput = capitalizedMethod.split(' ').filter(word => word.length > 0).join('');
        
        //Retrieve the first character and convert it to lowercase,Extract the remaining part of the string:
         let result = methodOutput.charAt(0).toLowerCase() + methodOutput.slice(1) + "()";
      console.log(result);
    }
    else if(inputMethod === 'S;V;'){
         inputData = input.slice(4);

        let result = "";
    for (let i = 0; i < inputData.length; i++) {
        if (inputData[i] >= 'A' && inputData[i] <= 'Z' && i > 0) {
            result += " ";
        }
        result += inputData[i];
    }
    //return result;
   
    let splitVariable = result.toLowerCase();
   console.log(splitVariable);
    }
}
 

processData("S;M;plasticCup()");
processData("C;C;coffee machine");
processData("C;V;mobile phone");

processData("S;V;iPad");
processData("C;M;mouse pad");
processData("C;C;code swarm");
processData("S;C;OrangeHighlighter");







//processData("S;M;plasticCup()");
//processData("C;V;mobile phone"); 
//processData("C;C;coffee machine"); 
//processData("S;C;LargeSoftwareBook"); 
//processData("C;M;mouse pad");
//processData("S;V;iPad");  
// plastic cup
// mobilePhone
// CoffeeMachine
// large software book
// whiteSheetOfPaper()
// picture frame      