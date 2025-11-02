/**
 * Převádí nezáporné celé číslo do zvolené soustavy (2, 8, 10).
 * @param {number} a Číslo v desítkové soustavě.
 * @param {number} s Dělitel nové soustavy (2, 8).
 * @returns {string} Číslo převedené do zvolené soustavy.
 */
export function Převod(a, s) {
    if (typeof a !== "number" || a < 0) a = 0; // bezpečný fallback
    a = Math.floor(a); // zajistí celé číslo
    if (a === 0) return "0";
    let vysledek = "";
    while (a > 0) {
        vysledek = String(a % s) + vysledek;
        a = Math.floor(a / s);
    }
    return vysledek;
}

/**
 * Převádí nezáporné celé číslo do šestnáctkové soustavy.
 * @param {number} a Číslo v desítkové soustavě.
 * @returns {string} Číslo v šestnáckové soustavě (A-F velká písmena).
 */
export function PřevodNa16(a) {
    if (typeof a !== "number" || a < 0) a = 0;
    a = Math.floor(a);
    if (a === 0) return "0";
    const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let vysledek = "";
    while (a > 0) {
        vysledek = hex[a % 16] + vysledek;
        a = Math.floor(a / 16);
    }
    return vysledek;
}
/**
 * podmínky vstupu
 * Převádí číslo do binární, osmičkové a šestnáckové soustavy.
 * @param {number}  Číslo v desítkové soustavě.
 */
export function permittedInputSystems() {
    return [10];
/**
 * Hlavní funkce programu.
 * Převádí číslo do binární, osmičkové a šestnáckové soustavy.
 * @param {number} A Číslo v desítkové soustavě.
 * @returns {string} Formátovaný řetězec s převody čísla.
 */
export function main(A) {
    // Pokud vstup není číslo, vyhodíme chybu nebo vrátíme "0"
    if (typeof A !== "number" || isNaN(A) || A < 0) {
        return "0"; // bezpečný fallback pro testy
    }

    const n = Math.floor(A); // zajistí celé číslo

    if (n === 0) {
        return "0"; // speciální případ pro nulu
    }

    // Použijeme původní převody
    const vysledek2 = Převod(n, 2);
    const vysledek8 = Převod(n, 8);
    const vysledek16 = PřevodNa16(n);

    // Vracíme formátovaný výstup
    return `Číslo: ${n}
je v dvojkové soustavě: ${vysledek2},
v osmičkové soustavě: ${vysledek8},
a v šestnáctkové soustavě: ${vysledek16}.`;
}
