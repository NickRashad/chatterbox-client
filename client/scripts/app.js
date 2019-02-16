var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    Listener.friend();
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // console.log(data);
      callback(data);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },
};

var Listener = {
  friend: function () {
    setTimeout(function () {
      $('.username').on('click', function (event) {
        Friends.toggleStatus(event.currentTarget);
        $(event.currentTarget).toggleClass('.usernamefriend');
        $(event.currentTarget).parent().toggleClass('friend');
      });
    }, 1000);
  },

  friends: function () {
    $('.username').on('click', function (event) {
      Friends.toggleStatus(event.currentTarget);
      $(event.currentTarget).toggleClass('.usernamefriend');
      $(event.currentTarget).parent().toggleClass('friend');
    });
  }
};