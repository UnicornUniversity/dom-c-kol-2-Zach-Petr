/**
 * Převádí nezáporné celé číslo do zvolené soustavy (2,8).
 * @param {number} a Číslo v desítkové soustavě.
 * @param {number} s Dělitel nové soustavy (2,8).
 * @returns {string} Číslo převedené do zvolené soustavyw.
 */
export function Převod(a, s) {
    if (a === 0) return "0";
    let vysledek = "";
    while (a > 0) {
        vysledek = (a % s) + vysledek;
        a = Math.floor(a / s);
    }
    return vysledek;
}
/**
 * Převádí nezáporné celé číslo do zvolené soustavy (16).
 * @param {number} a Číslo v desítkové soustavě.
 * @returns {string} Číslo převedené do zvolené soustavy.
 */
export function PřevodNa16(a){
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
 * @returns {number[]} Pole povolených vstupních soustav (jen číslo).
 */
export function permittedInputSystems() {
    return [10];
}

/**
 * Povolené výstupní soustavy.
 * @returns {number[]} Pole povolených výstupních soustav (2, 8, 16).
 */
export function permittedOutputSystems() {
    return [2, 8, 16];
}

/**
 * Hlavní funkce programu.
 * Převádí číslo do požadované soustavy.
 * @param {number} A Číslo v desítkové soustavě.
 * @param {number} inputSystem Soustava vloženého čísla.
 * @param {number} outputSystem Výstupní soustava (2, 8, 16).
 * @returns {string} Převod čísla do požadované soustavy nebo "0" pro špatný vstup.
 */
export function main(A, inputSystem, outputSystem) {
   
    if (isNaN(A) || A < 0) return "0";
    A = Math.floor(A);
if (![2, 8, 16].includes(outputSystem)) return "0";

if(outputSystem === 16){
    console.log("Výsledek do 16 soustavy je: " + PřevodNa16(A));
    return PřevodNa16(A);
}
    else{
        console.log("Výsledek do " + outputSystem + " soustavy je: " + Převod(A, outputSystem));
    return Převod(A, outputSystem);
    }
    
    }


