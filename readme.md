## keyword-checkor

check if a string has senstive words


```
var KeyWordCheckor = require('keyword-checkor');
var checkor = new KeyWordCheckor(['蛤蟆', '长城']);
checkor.addWord('老习');

var keys = checkor.hasWord("蛤蟆去了西安");
console.log(keys);
//[ '蛤蟆' ]

var key1 = checkor.hasWord("蛤蟆去了长城");
console.log(key1);
//[ '蛤蟆', '长城' ]

var s = checkor.replace("蛤蟆去了长城");
console.log(s);
//**去了**

```

PS:  part of code  copy from [text-censor](https://github.com/aojiaotage/text-censor)


License

MIT
