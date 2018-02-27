const conn = require ('./conn');
const { Sequelize } = conn;

const Customer = conn.define('customer', {
    name: {
        type: Sequelize.STRING,
        unique: false
    }
});

module.exports = Customer;