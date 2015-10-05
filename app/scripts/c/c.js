import BlogCollection from 'c/models/c-blog-collection';
import CreateBlogView from 'c/view/c-blog-view';
import BlogPopView from 'c/view/c-blog-pop-view';

window.App = {};
$(document).ready(function(){
  $('#container').append(JST['c/c']());
  $('#container').append(JST['c/c-blog-pop']());

App.blog = new BlogCollection();
  (App.blog.fetch());

window.createBlogView = new CreateBlogView({
  collection: App.blog
});
  $('#container').append(createBlogView.render().el);

  createBlogView.collection.fetch();
    $('.title').on('click', function(){
        console.log('hello');
    });



 });
