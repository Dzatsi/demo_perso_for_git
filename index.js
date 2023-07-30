// my demo for git and Github

const job = 'developper'
function rappelName (leny, age){
    if((typeof leny === 'string') && (typeof age === 'number')){
        return `hi ${leny} !! you have ${age} years old and you're ${job}`
    }else {
    
        return "syntax error"
    }
     
}
const nom = 'peter';
// console.log(nom);
const mbula = 27
console.log(rappelName(nom, mbula));