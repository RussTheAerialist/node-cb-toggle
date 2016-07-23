# cb-toggle

A simple module that enables you to define two callbacks, and toggle between them.  Useful for toggling between two states

```javascript
var cb_toggle = require('cb-toggle');

var callback = cb_toggle(()=>1, ()=>2));
console.log(cb()); // 1
cb.toggle()
console.log(cb()); // 2
cb.toggle()
console.log(cb()); // 1
```
