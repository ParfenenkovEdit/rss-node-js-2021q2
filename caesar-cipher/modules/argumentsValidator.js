const fs = require('fs');
const path = require('path');
const { errorHandler } = require('./errorHandler');

const argumentsValidator = (shift, input, output, action) => {
    if (!action) {
        errorHandler(new Error('--action (-a) argument is required!'));
    }

    if (!shift) {
        errorHandler(new Error('--shift (-s) argument is required!'));
    }
    if (input) {
        try {
            fs.accessSync(path.join(__dirname, '..', input), fs.constants.R_OK);
          } catch (err) {
            errorHandler(err);
          }
    }
    
    if (output) {
        try {
            fs.accessSync(path.join(__dirname, '..', output), fs.constants.W_OK);
          } catch (err) {
            errorHandler(err);
          }
    }
}

module.exports = { argumentsValidator }
