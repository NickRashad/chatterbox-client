var Listener = {
  friend: function () {
    setTimeout(function () {
      $('.username').on('click', function (event) {
        Friends.toggleStatus(event.currentTarget);
        $(this).toggleClass('.usernamefriend');
        $(event.currentTarget).parent().toggleClass('friend');
        console.log('done running');
      });
    }, 1000);
  },

  friends: function () {
    $('.username').on('click', function (event) {
      Friends.toggleStatus(event.currentTarget);
      $(this).toggleClass('.usernamefriend');
      $(event.currentTarget).parent().toggleClass('friend');
      console.log('Complete');
    });
  }
};
//Listener.friend();
