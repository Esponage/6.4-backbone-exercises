var Contact = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: {
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",

  }
});


export default Contact;
