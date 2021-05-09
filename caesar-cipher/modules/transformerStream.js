const { textTransformer } =  require('./textTransformer');
const { EOL } = require('os');
const { Transform } = require('stream');
const { errorHandler } = require('./errorHandler');
const { getAction, getShift } = require('./commander-options');

const transformer = new Transform({
    transform(chunk, encoding, callback) {
        try {
            callback(null, textTransformer(chunk, getAction(), getShift()));
        } catch (err) {
            errorHandler(err);
        }
    },
    final() {
        this.push(EOL)
    }
});

module.exports = { transformer };
