let greetings : string  = "Hello Abdullah"
let myNum :number = 6;
greetings.toLowerCase();
console.log(greetings)

// number
let userId  = 334466
userId.toFixed();

// boolean

let isLoggedIn :boolean = false;

let hero : string;
function getHero (){
    return "thor";
}

// we should avoud using the keyword any because it wil ldisable the type checking further more and that will kill the usage of typescript
hero =getHero();
export {}