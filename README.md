# rescuetime
rescuetime - time monitor

## Example

```javascript
const rescuetime = require('../');

rescuetime.start('this is a test');

setTimeout(()=>{
  rescuetime.end('this is a test', delta => {
    console.log(delta);
  });
}, 3000);
```
