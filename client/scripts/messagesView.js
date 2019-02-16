var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // GET all messages
    // Add them to our messages object
    // Run renderMessage on each message
    // MessagesView.$chats.on();
    App.fetch( function (data) {
      var count = 0;
      data.results.forEach(function (o) {
        if (typeof o.text === 'string' && typeof o.username === 'string' ) {
          Messages[count] = (o);
          MessagesView.renderMessage(o);
          count ++;
          $('.username').on('click', function (event) {
            Friends.toggleStatus(event.currentTarget);
            $(event.currentTarget).toggleClass('.usernamefriend');
            $(event.currentTarget).parent().toggleClass('.friend');
            console.log('done running', this);
          });
        }
      });
    });

  },

  renderMessage: function (message) {
    // Access MessageView.render for it's templating capability
    // Create a html variable to hold the results of our templating
    // Run the templating function over message and assign to html var
    // Append html to chats id
    var messageHtml = MessageView.render(message);
    MessagesView.$chats.append(messageHtml);
  }
};

