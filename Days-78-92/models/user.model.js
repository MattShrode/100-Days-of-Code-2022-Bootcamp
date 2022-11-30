const bcrypt = require('bcryptjs');

const db = require('../data/database');

class User {
    constructor(email, password, fullname, street, city, state, postal) {
        this.email = email,
        this.password = password,
        this.name = fullname,
        this.address = {
            street: street,
            city: city,
            state: state,
            postalCode: postal,
        };
    }

    async signup() {
        const hashedPassword = await bcrypt.hash(this.password, 12);

        await db.getDb().collection('users').insertOne({
            email: this.email,
            password: hashedPassword, //Hash!
            name: this.name,
            address: this.address,
        });
    }

    getUserWithSameEmail() {
        return db.getDb().collection('users').findOne({email: this.email});
    }

    comparePassword(hashedPassword) {
        return bcrypt.compare(this.password, hashedPassword);
    }
}

module.exports = User;