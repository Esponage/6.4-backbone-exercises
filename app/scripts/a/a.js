import PostsCollection from 'a/models/a-posts-collection';
import CreatePostsView from 'a/view/a-posts-view';

window.App = {};
$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`

App.posts = new PostsCollection();

window.createPostsView = new CreatePostsView();
  $('#container').append(createPostsView.render().el);



  $('.submit-button').on('click', function(){
     console.log(App.posts.fetch());
   });

   function renderPosts(display) {
    // $('.js-people').append(JST.person(person.toJSON()));
      $('.posts-container').append(JST.create-post(create-post.toJSON()));
    }

 });
