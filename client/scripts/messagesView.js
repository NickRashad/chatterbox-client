var MessagesView = {

  $chats: $('#chats'),
  dateOfLastMsg: 0,

  initialize: function() {
    // GET all messages
    // Add them to our messages object
    // Run renderMessage on each message
    App.fetch( function (data) {
      var count = data.results.length;
      dateOfLastMsg = data.results[0].createdAt;
      data.results.forEach(function (o) {
        if (o.text && o.username) {
          Messages[count] = (o);
          count --;
        } else {
          o.username = o.username || 'anonymous';
          o.text = o.text || '';
          Messages[count] = (o);
          count --;
        }
      });
      for (var msg in Messages) {
        MessagesView.renderMessage(Messages[msg]);
      }
    });
  },

  refreshstream: function() {
    App.fetch( function (data) {
      // Starting from last # we will add new messages onto our object
      var count = Math.max(...Object.keys(Messages)) || 0;

      // To get the last unadded message we start from the end of our data
      data.results.reverse().forEach(function (o) {
        // Add msg if after our last added msg date
        if (o.createdAt > dateOfLastMsg) {
          Messages[count] = (o);
          count ++;
          dateOfLastMsg = o.createdAt;
          MessagesView.renderMessage(o);
        }
      });
    });
  },

  renderMessage: function (message) {
    // Using our templating function add the current msg to the top of our feed
    var messageHtml = MessageView.render(message);
    MessagesView.$chats.prepend(messageHtml);
    // Call the off/on click event to add functionality
    Listener.friends();
  }
};

setInterval(function () {
  MessagesView.refreshstream();
}, 4000);
