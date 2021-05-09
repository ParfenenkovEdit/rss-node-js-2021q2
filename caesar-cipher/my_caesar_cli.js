const fs = require('fs');
const { argumentsValidator } = require('./modules/argumentsValidator');
const { pipeline } = require('stream');
const { shift, input, output, action } = require('./modules/commander-options');
const { errorHandler } = require('./modules/errorHandler');
const { transformer } = require('./modules/transformerStream');

argumentsValidator(shift, input, output, action);

function cipherPipeline(input, output, transformer) {
    const inputSource = input ? fs.createReadStream(input) : process.stdin;
    const outputTarget = output ? fs.createWriteStream(output, {flags: 'a'}) : process.stdout;

    pipeline(inputSource, transformer, outputTarget, (err) => errorHandler(err));
}

cipherPipeline(input, output, transformer);
