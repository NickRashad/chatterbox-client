var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    debugger;
    MessagesView.$chats.on();
  },

  renderMessage: function(message) {
    // Access MessageView.render for it's templating capability
    // Create a html variable to hold the results of our templating
    // Run the templating function over message and assign to html var
    // Append html to chats id
    var messageHtml = MessageView.render(message);
    MessagesView.$chats.append(messageHtml);
  }
};
