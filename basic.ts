let id: number = 10;
let names: string = "MSC";
let activate: boolean = true;



function add(a: number, b:number): number {

    return a + b;
}


// It is not returning anything so no return value here below

function sub(c: number, d: number) {

    console.log( c - d );
}


interface User{
    id: number;
    names: string;
    active: boolean;
}


type Status = "success" | "error";


const users : User[] = [];

users.push({id:1, names:"MSC", active: true})

console.log(users)

// optional (?)

interface User{
    id: number;
    name?: string;
    isActive? : boolean;
}


let value: string | null = null;