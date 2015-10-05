import ContactCollection from 'b/models/b-contact-collection';
import CreateContactView from 'b/view/b-contact-view';

window.App = {};
$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`

App.contact = new ContactCollection();

window.createContactView = new CreateContactView();
  $('#container').append(createContactView.render().el);



  $('.submit-button').on('click', function(){
     console.log(App.contact.fetch());
   });

  //  function renderContact(display) {
  //     $('.contact-container').append(JST.create-contact(create-contact.toJSON()));
  //   }

 });
