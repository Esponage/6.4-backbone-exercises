import Posts from 'a/models/a-posts';

var CreatePostsView = Backbone.View.extend({

  tagName: 'form',
  className: "",

  template: JST['a/a'],

  events: {
    'submit': 'createPost'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createPost: function(e) {
    e.preventDefault();
    App.posts.create(this.serializeForm());
  },

  serializeForm: function() {
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input) {
      result[input.name] = input.value;
    });
    return result;
  }
});

export default CreatePostsView;
