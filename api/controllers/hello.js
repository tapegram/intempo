const main = require('../src/main');

const sayHello = async (req, res, next) => {
    res.json({
        message: main.hello()
    })
}

module.exports = {
    sayHello
}