var db = require('../db');
//

module.exports = {
  messages: {
    get: function () {
      console.log('WE ARE IN THE MODULE GET- messages');
      db.getMessages();
      // callback(db.getMessages('Jefe'));
    }, // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      // a function which produces all the users
    },
    post: function () {
      // a function which can be used to insert a user into the database
    }
  }
};

