const http = require('http');

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

  let obj = {
    firstName: 'Binam',
    lastName: 'Khoshnam',
    age: -100
  }

  res.write(JSON.stringify(obj));
  //res.write('{"firstName": "ali", "age": 20 }');
  res.end(); 
}).listen(8088); 