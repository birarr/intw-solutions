function getIndex(char) {
    var alphabet = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y',
        'z'];

    return alphabet.indexOf(char);
}

function designerPdfViewer(h, word) {
    // Write your code here

       let wordHeight = [], maxVal = 0;
    for (let i = 0; i < word.length; i++) {
        wordHeight.push(h[getIndex(word[i])]);
    }

    maxVal = Math.max(...wordHeight);
    return (word.length * maxVal);
}