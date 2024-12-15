// Define the mapping of letters to numbers
const letterToNumber = {
    'A': 2, 'B': 7, 'C': 3, 'D': 1, 'E': 9, 'F': 4, 'G': 8, 'H': 5,
    'I': 11, 'J': 6, 'K': 10, 'L': 21, 'M': 25, 'N': 13, 'O': 24, 'P': 16,
    'Q': 20, 'R': 12, 'S': 22, 'T': 18, 'U': 14, 'V': 19, 'W': 26, 'X': 17,
    'Y': 23, 'Z': 15
};

// Reverse mapping for decryption
const numberToLetter = {};
for (const [letter, number] of Object.entries(letterToNumber)) {
    numberToLetter[number] = letter;
}

// Function to encrypt message
function encryptMessage() {
    const message = document.getElementById('encrypt-input').value.toUpperCase();
    let encryptedMessage = [];
    
    for (const char of message) {
        if (char in letterToNumber) {
            encryptedMessage.push(letterToNumber[char]);
        } else if (char === ' ') {
            encryptedMessage.push(0); // Represent space with '0'
        }
    }

    document.getElementById('encrypt-output').textContent = encryptedMessage.join(', ');
}

// Function to decrypt message
function decryptMessage() {
    const encryptedInput = document.getElementById('decrypt-input').value;
    const numbers = encryptedInput.split(',').map(num => num.trim());
    let decryptedMessage = [];

    for (const number of numbers) {
        if (number === '0') {
            decryptedMessage.push(' '); // Convert '0' back to space
        } else if (number in numberToLetter) {
            decryptedMessage.push(numberToLetter[number]);
        }
    }

    document.getElementById('decrypt-output').textContent = decryptedMessage.join('');
}
