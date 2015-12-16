const rescuetime = require('../');

rescuetime.start('this is a test');

setTimeout(()=>{
  rescuetime.end('this is a test');
}, 3000);
