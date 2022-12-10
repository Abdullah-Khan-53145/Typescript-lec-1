function addTwo(num: number) : number{
    return num+2;
}


function getUpper(val : string){
    return val.toUpperCase();
}


function signUpUser(name:string, email:string, isPaid:boolean){}


const loginUser = (name:string, email:string, isPaid:boolean = false)=>{}

addTwo(5);
getUpper("four");
loginUser("abdullah", "abdullah123@gmail.com")
signUpUser("abdullah", "abdullah123@gmail.com", false)




function getValue (myVal:number){
    if(myVal > 5){
        return true
    }
    return "200 ok"
}


const getHello   = () :number=>{
return 200
}

// const heros = ["thor", "spiderman", "ironman"]
const heros = [1, 2, 3]

heros.map ((hero):string =>{
    return `hero is ${hero}`
})
export {};