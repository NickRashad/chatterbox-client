var RoomsView = {
  $chats: $('#chats'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // Add a input bar for adding a room
    //RoomsView.$button();
    // var inputHtmls = _.template(`

    // `);
    // RoomsView.$button.prepend(inputHtml);
  },

  renderRoom: function(roomname) {
    // Add a string
    if (typeof roomname === 'string') {
      var obj = { roomname: roomname };
    } else if (typeof roomname === 'object') {
      var obj = roomname;
    }

    var addRoom = _.template(`
      <option>
        <%- roomname %>
      </option>
    `);
    var roomOption = addRoom(obj); //{roomname: rooname}
    RoomsView.$select.append(roomOption);
  }
};




