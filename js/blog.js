
Parse.initialize("Lg7lMHJGFX3Qb3qisjuhIYVez12XaMdwsY7klMrV", "QFF5alFJUNPGzB28Brq4MwzAAFvzHXvdROz2u0rA");



var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});