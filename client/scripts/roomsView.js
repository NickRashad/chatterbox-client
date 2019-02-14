var RoomsView = {
  $chats: $('#chats'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // Add a input bar for adding a room
    //RoomsView.$button();
    var inputHtmls = _.template(`

    `);
    RoomsView.$button.append(inputHtml);
  },

  renderRoom: function() {
    // Add a room from the input bar to the room selection
  //RoomsView.$select.append(Rooms)
  }

};
