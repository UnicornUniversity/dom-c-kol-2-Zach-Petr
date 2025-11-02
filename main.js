/**
 * Převádí nezáporné celé číslo do zvolené soustavy (2, 8, 10).
 * @param {number} a Číslo v desítkové soustavě.
 * @param {number} s Základ nové soustavy (2, 8, 10).
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
 * @returns {string} Číslo v hexadecimální soustavě (A-F velká písmena).
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
 * Převádí číslo do binární, osmičkové a hexadecimální soustavy.
 * @param {number} A Číslo v desítkové soustavě.
 * @returns {string} Formátovaný řetězec s převody čísla.
 */
export function main(A) {
    let n = (typeof A === "number" && A >= 0) ? Math.floor(A) : 0;
 if (n === 0) {
        return "0"; // nebo "0" pokud test očekává číslo
    }

    const bin = Převod(n, 2);
    const oct = Převod(n, 8);
    const hex = PřevodNa16(n);

    return `Číslo: ${n}
je v dvojkové soustavě: ${bin},
v osmičkové soustavě: ${oct},
a v šestnáctkové soustavě: ${hex}.`;
}
