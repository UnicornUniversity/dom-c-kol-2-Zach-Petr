/**
 * Převádí nezáporné celé číslo do zvolené soustavy (2).
 * @param {number} a Číslo v desítkové soustavě.
 * @param {number} s Dělitel nové soustavy (2).
 * @returns {string} Číslo převedené do zvolené soustavy.
 */
export function Převod(a, s) {
    if (typeof a !== "number" || a < 0) a = 0;
    a = Math.floor(a);
    if (a === 0) return "0";
    let vysledek = "";
    while (a > 0) {
        vysledek = String(a % s) + vysledek;
        a = Math.floor(a / s);
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
    return [2, 8];
}

/**
 * Hlavní funkce programu.
 * Převádí číslo do požadované soustavy.
 * @param {number} A Číslo v desítkové soustavě.
 * @param {number} B Výstupní soustava (2, 8).
 * @returns {string} Převod čísla do požadované soustavy nebo "0" pro chybný vstup.
 */
export function main(A, B) {
   A = Number(A);
    B = Number(B)
    if (isNaN(A) || A < 0) return "0";

    const n = Math.floor(A);
    if (n === 0) return "0";
if (![2, 8].includes(B)) return "0";

 return Převod(n, B);
    }


