const { program } = require('commander');
program.version('0.0.1');

program
    .option('-s, --shift <value>', 'shift')
    .option('-i, --input <value>', 'input file')
    .option('-o, --output <value>', 'output file')
    .option('-a, --action <value>', 'action encode/decode');

program.parse(process.argv);

const options = program.opts();

const getAction = () => options.action;

const getShift = () => options.shift;

module.exports = { 
    shift: options.shift,
    input: options.input,
    output: options.output,
    action: options.action,
    getAction,
    getShift
};
