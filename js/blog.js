
Parse.initialize("Lg7lMHJGFX3Qb3qisjuhIYVez12XaMdwsY7klMrV", "QFF5alFJUNPGzB28Brq4MwzAAFvzHXvdROz2u0rA");

//2nd tut at code.tutsplus.com Oct 5th 2014.

/*var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
}); */

var Blog = Parse.Object.extend("Blog");

var Blogs = Parse.Collection.extend({
    model: Blog
});

var blogs = new Blogs();

<span class="skimlinks-unlinked">blogs.fetch</span>({
    success: function(blogs) {
        <span class="skimlinks-unlinked">console.log(blogs</span>);
    },
    error: function(blogs, error) {
        <span class="skimlinks-unlinked">console.log(error</span>);
    }
});



