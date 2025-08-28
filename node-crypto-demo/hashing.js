const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const senha = "minha_senha_super_secreta";

// Hash usando SHA-256 (fixo)
const sha256Hash = crypto.createHash('sha256').update(senha).digest('hex');
console.log("SHA-256 Hash:", sha256Hash);

// Hash usando bcrypt (com salt)
const saltRounds = 10;
bcrypt.hash(senha, saltRounds, (err, bcryptHash) => {
    if (err) throw err;
    console.log("Bcrypt Hash:", bcryptHash);

    // Verificar se a senha bate com o hash gerado
    bcrypt.compare(senha, bcryptHash, (err, result) => {
        console.log("A senha está correta?", result);
 });
});