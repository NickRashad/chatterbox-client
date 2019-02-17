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
    // Accepts a roomname or premade ready obj (assumes roomname is a key inside of obj)
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
    var roomOption = addRoom(obj);
    RoomsView.$select.append(roomOption);
    $('select').val('');
  },

  changeRooms: function(roomname) {
    //Clear all messages
    for (var msg in Messages) {
      if (Messages[msg].roomname === roomname) {
        MessagesView.renderMessage(Messages[msg]);
      }
    }
    Friends.initialize();
  }
};

//when select room
//all messages with selected room id
//message initilize
//$('rooms').off('select').on('select)
$('#rooms').change(function () {
  var currRoom = $('select').val();
  $('#chats').empty();
  RoomsView.changeRooms(currRoom);
});