# logto

A minimal nodejs log file maker on the go.

If any bug is encountered, please do report.

## Todo

- [ ] Allow users to add custom logging function

## usage

```js
const logto=require('logto);
const testlogger=new logto({
    dir:"your/preffered/dir",
    file:"your_log_file_name.log"
});

// do some stuff
testlogger.log("this is first write");
// do some stuff
testlogger.log("this is second write");
// do some stuff
testlogger.log("this is third write");
// want to get logfile location on the run?
console.log(testlogger.logfile);
// done with everything?
// make sure to do this
testlogger.end();
```

## API

### logto(options)

```
options = {
  dir: String  
  file: String
  mute: Boolean 
}
```
  `options.dir`: directory where log file needs to be saved, (if dir entered doesn't exists then logto creates one)
 `options.file`: name of log file
 `options.mute`:(default: true)if one wants to log into file as well as print the data on the screen then set mute: false
