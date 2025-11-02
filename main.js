/**
 * Převádí číslo do dvjokové a osmičkové soustavy.
 * @param {number} a je číslo v desítkové soustavě.
 * @param {number} s dělitel a zároveň určuje sestavu.
 * @returns {string} číslo v šestnáckové.
 */
export function Převod(a, s){
    if(a === 0) return "0";
    let vysledek = "";
    while(a > 0){
        vysledek = (a % s) + vysledek;
        a = Math.floor(a / s);
    }
    return vysledek;
}
/**
 * Převádí číslo do šestnáctkové soustavy.
 * @param {number} a je číslo v desítkové soustavě.
 * @returns {string} číslo v šestnáckové.
 */
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
/**
 * Povolené vstupní soustavy.
 * @returns {number[]} Pole povolených vstupních soustav.
 */
export function permittedInputSystems() {
    return [2, 8, 10, 16];
}

/**
 * Povolené výstupní soustavy.
 * @returns {number[]} Pole povolených výstupních soustav.
 */
export function permittedOutputSystems() {
    return [2, 8, 10, 16];
}
/**
 * Hlavní funkce programu.
 */
export function main() {
/* global prompt */
let answer = prompt("Zadej číslo v desítkové soustavě:");
const A = Number(answer);

let vysledek1 = Převod(A, 2);
let vysledek2 = Převod(A, 8);
let vysledek3 = PřevodNa16(A);

console.log(`Číslo: ${A}
je v dvojkové soustavě: ${vysledek1},
v osmičkové soustavě: ${vysledek2},
a v šestnáckové soustavě: ${vysledek3}.`);
}
