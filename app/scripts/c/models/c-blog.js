var Blog = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    title: "",
    post: "",

  }
});


export default Blog;
