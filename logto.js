const fs = require('fs-extra');
const stackTracey = require('stacktracey');
const path = require('path');

// TODO : allow different logging formats
function logto(options) {
    options = Object.assign({
        dir: "",
        file: "",
        mute: true
    }, options);
    // validate options
    check(options);
    const outfile = path.join(options.dir, options.file);
    fs.ensureFileSync(outfile);
    this.logfile = outfile;
    this.log = defaultLogger;
    this.mute = options.mute;
    this.end = logEnd;
    // create a new outstream
    this.writestream = fs.createWriteStream(outfile, { flags: 'a' });
}

function defaultLogger(...inputs) {
    let st = new stackTracey().items[1];
    let dt = new Date().toUTCString();
    inputs = String(...inputs);
    let lgdata = `${dt}| ${inputs} | <${st.beforeParse}`;
    if (!(this.mute)) console.log(lgdata);
    //append data to log file
    this.writestream.write(`${lgdata}\n`);
}

// function to exit log stream
function logEnd() {
    this.writestream.write("log end\n");
    this.writestream.end();
}

// to check if proper options are passed or not
function check(options) {
    if (options.dir.length === 0) {
        console.log("logto: cannot have empty directory name in options");
        process.exit(1);
    };
    if (options.file.length === 0) {
        console.log("logto: cannot have empty file name in options");
        process.exit(1);
    }
}

module.exports = logto;