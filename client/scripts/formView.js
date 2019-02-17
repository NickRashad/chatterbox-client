var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var currRoom = $('select').val(); //$(document).find('select').children()[0].textContent.trim();
    var currSubMes = $('#message').val();

    Parse.create({
      username: `${App.username}`,
      text: `${currSubMes}`,
      roomname: `${currRoom}`
    });
    $('#message').val('');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};