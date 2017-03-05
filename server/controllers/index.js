var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log('controller get req', req);
      // console.log('controller get res', res);
      console.log('WE ARE IN THE CONTROLLER GET- messages');
      models.messages.get();
      // res.send(models.messages.get);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('WE ARE IN THE CONTROLLER POST- messages');
      console.log('controller post req.body', req.body);
      res.send('?username=test I AM HERE');
      // console.log('controller post res', res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('WE ARE IN THE CONTROLLER - users');
      res.send('HELLO USER');
    },
    post: function (req, res) {}
  }
};

