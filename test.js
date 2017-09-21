var KeyWordCheckor = require('./index');
var checkor = new KeyWordCheckor(['蛤蟆', '长城']);

var keys = checkor.hasWord("蛤蟆去了西安");
console.log(keys);
var key1 = checkor.hasWord("蛤蟆去了长城");
console.log(key1);

var s = checkor.replace("蛤蟆去了长城");
console.log(s);