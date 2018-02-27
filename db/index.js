const conn = require ('./conn');
const Customer = require('./customer');

const sync = () => {
    return conn.sync({ force: true })
}

const seed = () => {
    return Promise.all([
        Customer.create({ name: 'A' }),
        Customer.create({ name: 'B' })
    ])
};

module.exports = {
    sync,
    seed,
    models: {
        Customer
    }
};
