import Posts from 'a/models/a-posts';

var PostsCollection = Backbone.Collection.extend({
  model: Posts,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/blogposts"
});


export default PostsCollection;
