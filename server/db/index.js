var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});

connection.connect(function(err) {
  if (!err) {
    console.log('Database is connected ... 👏');    
  } else {
    console.log('Error connecting database ... :');    
  }
});


getMessages = function () {
  connection.query('SELECT * from users', function(err, rows, fields) {
    if (!err) {
      console.log('GET user from row 0: ', rows[0].username);
      // console.log('GET user from row 0: ', rows[0].username);
      // console.log('GET user from row 1: ', rows[1].username);
      // console.log('GET user from row 2: ', rows[2].username);
      // console.log('GET ALL MESSAGES fields: ', fields[0]);
    } else {
      console.log('Error while performing Query.');
    }
  });

  connection.end();
};

//GET ALL MESSAGES FROM DB


// connection.query('SELECT * from messages', function(err, rows, fields) {
//   if (!err) {
//     console.log('GET messages from row 0: ', rows[0]);
//     console.log('GET messages from row 1: ', rows[1].username);
//     console.log('GET messages from row 2: ', rows[2].username);
//     // console.log('GET ALL MESSAGES fields: ', fields[0]);
//   } else {
//     console.log('Error while performing Query.');
//   }
// });



module.exports.getMessages = getMessages;
  
