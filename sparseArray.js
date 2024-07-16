

function matchingStrings(strings, queries) {
    // Write your code here
    var output = [];
    
    
       for(let i=0; i<queries.length; i++){
        var result = strings.filter((query) => query === queries[i] )
                 
        output.push(result);
       var matchingString = output.map(x => x.length);
        
       }

     console.log(output);
     console.log(matchingString);
     
}

const n =3;
//const strings = ["aba","baba","aba","xzxb"];
const strings = ["def","de","fgh"];  


const q = 3;    
//const queries = ["aba", "xzxb","ab"];
const queries = ["de", "lmn","fgh"];    


matchingStrings(strings,queries);   
    
    
   
    