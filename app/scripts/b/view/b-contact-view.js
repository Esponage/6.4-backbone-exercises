import Contact from 'b/models/b-contact';

var CreateContactView = Backbone.View.extend({

  tagName: 'form',
  className: "",

  template: JST['b/b'],

  events: {
    'submit': 'createContact'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createContact: function(e) {
    e.preventDefault();
    App.contact.create(this.serializeForm());
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

export default CreateContactView;
