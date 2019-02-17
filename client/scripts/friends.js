var Friends = {
  friendsList: [],

  // On clicking a username in chats add this friend to the friendslist
  toggleStatus: function(userEvent) {
    debugger;
    // Add to friendslist if not there && Splice out if there
    // ternary indexof userEvent inside of friends list === -1
    // If true which means it's not there then push to friendsList array
    // If false then splice at index this 1 element at friendslist array
    var arr = Friends.friendsList;
    var ind = arr.indexOf(userEvent.innerText);
    ind === -1 ? arr.push(userEvent.innerText) : arr.splice(ind, 1);
    // For this friend find each post and click to apply
    $(`div:contains('${userEvent.innerText}')`).parent('.chat').toggleClass('friend');
  },

  initialize: function() {
    var arr = Friends.friendsList;
    for (var one of arr) {
      $(`div:contains('${o}')`).parent('.chat').toggleClass('friend');
    }
  }

};