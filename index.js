// my demo for git and Github

const job = 'developper'
function rappelName (leny, age){
    if((typeof leny === 'string') && (typeof age === 'number')){
        return `hello ${leny} !! you have ${age} years old and you're ${job}`
    }else if((typeof leny === 'string') || (typeof age != 'number')) {
        return "you must give your correct name or age"
    }else {
        return 'syntax error'
    }
     
}
const nom = 'grace';
// console.log(nom);
const mbula = 25
console.log(rappelName(nom, mbula));
