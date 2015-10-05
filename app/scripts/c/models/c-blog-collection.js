import Blog from 'c/models/c-blog';

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/blogposts"
});


export default BlogCollection;
