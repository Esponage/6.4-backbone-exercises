var Posts = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    title: "",
    post: "",

  }
});


export default Posts;
