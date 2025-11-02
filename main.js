export function Převod(a, s){
    let b = NaN; //proměnná pro ukládání zbytku a values mapy
    let c = 0; // proměnná pro počet opakování a klíče mapy
    let mapa = new Map(); // mapa pro ukládání výsledků
    while(a > 0){
        b = a % s;
        mapa.set(c , b);
        a = Math.floor (a / s);
        c++;
    }
    let hodnoty = Array.from(mapa.values()).reverse();
    let vysledek = hodnoty.join("");
    return vysledek;
}
export function PřevodNa16(a){
    let b = NaN; //proměnná pro ukládání zbytku a values mapy
    let c = 0; // proměnná pro počet opakování a klíče mapy
    let mapa = new Map(); // mapa pro ukládání výsledků
    while(a > 0){
        b = a % 16;
        if(b === 10){
            b = "A";         // převádění zbytků na čísla
        }
        else if(b === 11){
            b = "B";
        }
        else if(b === 12){
            b = "C";
        }
        else if(b === 13){
            b = "D";
        }
        else if(b === 14){
            b = "E";
        }
        else if (b === 15){
            b = "F";
        }
        mapa.set(c , b);
        a = Math.floor (a / 16);
        c++;
    }
    let hodnoty = Array.from(mapa.values()).reverse();
    let vysledek = hodnoty.join("");
    return vysledek;
}
let answer = prompt("Zadej číslo v desítkové soustavě:");



const A = Number(answer);
let vysledek1 = Převod(A, 2);
let vysledek2 = Převod(A, 8);
let vysledek3 = PřevodNa16(A);
console.log(`Číslo: ${A}
je v dvojkové soustavě: ${vysledek1},
v osmičkové soustavě: ${vysledek2}
a v šestnáckové soustavě: ${vysledek3}.`);

