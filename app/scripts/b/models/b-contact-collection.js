import Contact from 'b/models/b-contact';

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/blogposts"
});


export default ContactCollection;
