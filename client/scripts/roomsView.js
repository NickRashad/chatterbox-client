var RoomsView = {
  $chats: $('#chats'),
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    App.fetch( function (data) {
      data.results.forEach(function (o) {
        if (typeof o.roomname === 'string' && Rooms.roomList.indexOf(o.roomname) === -1 ) {
          Rooms.roomList.push(o.roomname);
          RoomsView.renderRoom(o.roomname);
        }
      });
    });
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




