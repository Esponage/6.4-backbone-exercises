var Posts = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    title: "",
    body: "",

  }
});


export default Posts;
