import BlogCollection from 'c/models/c-blog-collection';

var CreateBlogView = Backbone.View.extend({

  tagName: 'ul',
  className: "blog-list",

  template: JST['c/c'],

  events: {
    'submit': 'createBlog'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createBlog: function(e) {
    e.preventDefault();
    App.blog.create(this.serializeForm());
  },

});

export default CreateBlogView;
