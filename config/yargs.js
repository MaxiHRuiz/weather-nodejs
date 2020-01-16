const argv = require('yargs')
    .options({
        address: {
            alias: 'd',
            desc: 'City address to get the weather.',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}