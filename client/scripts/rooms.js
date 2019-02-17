var Rooms = {
  add: function () {
    var newMsg = $('#newroom').val();
    console.log(newMsg);
    RoomsView.renderRoom(newMsg);
    $('select').val(`${newMsg}`);
    $('#newroom').val('');
  },

  roomList: [],

};

$('button').on('click', function (event) {
  Rooms.add();
});