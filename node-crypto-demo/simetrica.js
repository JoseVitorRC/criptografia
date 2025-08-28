const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Chave de 32 bytes
const iv = crypto.randomBytes(16); // Vetor de Inicialização (IV)

function encryptAES(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decryptAES(encryptedText) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const mensagem = "Texto secreto AES";
const criptografado = encryptAES(mensagem);
console.log("\nAES-256 Encriptado:", criptografado);
console.log("AES-256 Decriptado:", decryptAES(criptografado));