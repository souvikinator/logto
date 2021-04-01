const logto=require('./logto');
const logger =new logto({
    // at /your/home/dir/logto/logs
    dir:"testlog",
    file:"currentdata.log",
    mute:false
});
logger.log("hello world");
logger.log("xyz");
logger.log("hello world");
logger.log("hello world");
logger.log("hello world");
logger.log("hello world");
logger.log("hello world");
logger.log("hello world");
// can access log file path as below
console.log("log file saved at:",logger.logfile);
logger.end();