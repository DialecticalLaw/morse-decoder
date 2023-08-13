const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let morseSymbols = '';
    for (let i = 0; i < expr.length; i += 2) {
        if (i % 10 === 0 && i !== 0) {
            morseSymbols = morseSymbols + '*';
        }
        if (expr[i] === '0' || expr[i] === '1') {
            if (expr[i] === '1' && expr[i + 1] === '0') {
                morseSymbols = morseSymbols + '.';
            } else if (expr[i] === '1' && expr[i + 1] === '1') {
                morseSymbols = morseSymbols + '-';
            }
        } else if (expr[i] === '*') {
            morseSymbols = morseSymbols + 'SPACE*';
            i = i + 10;
        }
    }
    let arrMorse = morseSymbols.split('*');
    for (let symb of arrMorse) {
        if (symb === 'SPACE') {
            result = result + ' ';
        } else {
            for (let i = 0; i < Object.keys(MORSE_TABLE).length; i++) {
                if (symb === Object.keys(MORSE_TABLE)[i]) {
                    result = result + MORSE_TABLE[Object.keys(MORSE_TABLE)[i]];
                }
            }
        }
    }
    return result;
}

module.exports = {
    decode
}