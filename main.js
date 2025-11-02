/**
 * Převádí číslo do dvojkové a osmičkové soustavy.
 * @param {number} a Číslo v desítkové soustavě.
 * @param {number} s Základ nové soustavy (2, 8, 10).
 * @returns {string} Číslo převedené do zvolené soustavy.
 */
export function Převod(a, s){
    if(a === 0) return "0";
    let vysledek = "";
    while(a > 0){
        vysledek = String(a % s) + vysledek; // vždy string
        a = Math.floor(a / s);
    }
    return vysledek;
}

/**
 * Převádí číslo do šestnáctkové soustavy.
 * @param {number} a Číslo v desítkové soustavě.
 * @returns {string} Číslo v hexadecimální soustavě (A-F velká písmena).
 */
export function PřevodNa16(a){
    if(a === 0) return "0";
    const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let vysledek = "";
    while(a > 0){
        vysledek = String(hex[a % 16]) + vysledek;
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
 * @returns {object} Objekt s vlastnostmi {decimal, binary, octal, hex}.
 */
export function main(A) {
    const n = (A === undefined) ? 0 : A; // výchozí hodnota

    return {
        decimal: String(n),
        binary: String(Převod(n, 2)),
        octal: String(Převod(n, 8)),
        hex: String(PřevodNa16(n))
    };
}
