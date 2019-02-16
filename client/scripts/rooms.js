var Rooms = {
  add: function () {
    RoomsView.renderRoom('needsParameter');
  },

  roomList: [],

};

$('button').on('click', function (event) {
  Rooms.add();
  console.log(event.currentTarget);
});