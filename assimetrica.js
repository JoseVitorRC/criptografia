const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 512,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

function encryptRSA(text, pubKey) {
    return crypto.publicEncrypt(pubKey, Buffer.from(text)).toString('base64');
}

function decryptRSA(encryptedText, privKey) {
    return crypto.privateDecrypt(privKey, Buffer.from(encryptedText,
'base64')).toString('utf8');
}

const mensagemRSA = "Texto secreto RSA";
const criptografadoRSA = encryptRSA(mensagemRSA, publicKey);
console.log("\nRSA Encriptado:", criptografadoRSA);
console.log("RSA Decriptado:", decryptRSA(criptografadoRSA, privateKey));