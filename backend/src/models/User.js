const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

// Modelo de Documentacion de mongoose para mongodb
const UserSchema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

// encriptacion de cotraseña
UserSchema.methods.encryptPassword = async (password) =>{
    const salt = await bcrypt.getSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

//comparando contraseña
UserSchema.methods.matchPassword = async function (password) {
    bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);