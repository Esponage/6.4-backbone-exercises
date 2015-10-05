var Blog = require('c/models/c-blog');
var BlogPopView = require('c/view/c-blog-view');

var BlogPopView = Backbone.View.extend({
  tagName: 'li',
  className: "li-pop",
  template: JST['c/c-blog-pop'],
  events: {
    'click': 'detailview'
  },

  initialize: function(){
   this.listenTo(this.collection, 'update', this.render);
 },

  render: function(){
  this.$el.html(this.template({
        model: this.model.toJSON()
      }));
      return this;
    },
  detailview: function(){
    this.$el.html(this.template());
    return this;
  }
  
  });


module.exports = BlogPopView;
