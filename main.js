/**
 * Převádí nezáporné celé číslo do zvolené soustavy (2, 8, 10).
 * @param {number} a Číslo v desítkové soustavě.
 * @param {number} s Dělitel nové soustavy (2, 8).
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
 * Převádí nezáporné celé číslo do šestnáctkové soustavy.
 * @param {number} a Číslo v desítkové soustavě.
 * @returns {string} Číslo v šestnáctkové soustavě (A-F velká písmena).
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
 * @returns {number[]} Pole povolených vstupních soustav (jen číslo).
 */
export function permittedInputSystems() {
    return [10];
}

/**
 * Povolené výstupní soustavy.

 */
export function permittedOutputSystems() {
    return [2, 8, 16]; // čísla soustav
}


/**
 * Hlavní funkce programu.
 * Převádí číslo do binární, osmičkové a šestnáctkové soustavy.
 * @param {number} A Číslo v desítkové soustavě.
 * @returns {string} Formátovaný řetězec s převody čísla nebo "0" pro chybný vstup.
 */
export function main(A, outputSystem = null) {
    if (typeof A !== "number" || isNaN(A) || A < 0) return "0";
    const n = Math.floor(A);
    if (n === 0) return "0";

    if (outputSystem === 2) return Převod(n, 2);
    if (outputSystem === 8) return Převod(n, 8);
    if (outputSystem === 16) return PřevodNa16(n);

    // Pokud žádná soustava, můžeš vrátit formátovaný string
    const bin = Převod(n, 2);
    const oct = Převod(n, 8);
    const hex = PřevodNa16(n);
    return `Číslo: ${n}\nje v dvojkové soustavě: ${bin},\nv osmičkové soustavě: ${oct},\na v šestnáctkové soustavě: ${hex}.`;
}

