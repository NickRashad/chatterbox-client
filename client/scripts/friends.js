var Friends = {
  toggleStatus: function() {
    // On clicking a username in chats add this friend to the friendslist
    //$chats: $('#chats')
    //MessagesView.$chats.

    $('.username').on('click', function (event) {
      // Add class of friend to username
      $(event.currentTarget).toggle('.friend');
      //$(event.currentTarget).addClass('.friend');

    });

  },

  // friendsList: []


//$chats.('username').append(this);
  //});
};