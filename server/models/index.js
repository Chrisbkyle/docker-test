const Test = require('./testModel')

async function init() {
    await Test.sync();
}

init();

module.exports = {
    Test
}