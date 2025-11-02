 export function Převod(a, s){
    if(a === 0) return "0";
    let vysledek = "";
    while(a > 0){
        vysledek = (a % s) + vysledek;
        a = Math.floor(a / s);
    }
    return vysledek;
}

export function PřevodNa16(a){
    if(a === 0) return "0";
    const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let vysledek = "";
    while(a > 0){
        vysledek = hex[a % 16] + vysledek;
        a = Math.floor(a / 16);
    }
    return vysledek;
}

let answer = prompt("Zadej číslo v desítkové soustavě:");
const A = Number(answer);

let vysledek1 = Převod(A, 2);
let vysledek2 = Převod(A, 8);
let vysledek3 = PřevodNa16(A);

console.log(`Číslo: ${A}
je v dvojkové soustavě: ${vysledek1},
v osmičkové soustavě: ${vysledek2},
a v šestnáckové soustavě: ${vysledek3}.`);
