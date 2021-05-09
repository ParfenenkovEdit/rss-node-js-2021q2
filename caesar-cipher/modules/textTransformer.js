const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const textTransformer = (text, action, shift)  => {
    if (action !== 'encode') {
        shift *= -1;
    }
    
    const result = text.toString().split('').map((symbol) => {
        const symbolInLowerCase = symbol.toLowerCase();

        const indexInAlphabet = alphabet.indexOf(symbolInLowerCase);

        if (indexInAlphabet !== -1) {
            const isTransformToLowerCase = symbol !== symbolInLowerCase;
            let shiftedSymbolIndex = (indexInAlphabet + shift % alphabet.length) % alphabet.length;

            if (shiftedSymbolIndex < 0) {
                shiftedSymbolIndex += alphabet.length;
            }
            
            return isTransformToLowerCase ? alphabet[shiftedSymbolIndex].toUpperCase() : alphabet[shiftedSymbolIndex];
        }

        return symbol;
    });

    return result.join('');
}

module.exports = { textTransformer };