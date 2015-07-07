require('shelljs/global');

// Sync call to exec()
var version = exec('node --version', {silent:true}).output;
var argv = "1234";
// Async call to exec()
exec('./main ' + argv, function(status, output) {
  console.log('Exit status:', status);
  console.log('Program output:', output);
});