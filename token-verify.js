const jwt = require('jsonwebtoken');


const secret = 'myCat';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3MTI4MDMzOX0.q0YXLfcRVRgwwm6RlPTsFZ-p2fXL3HSZyg3DHkPxd6I'

function verifyToken(token, secret){
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
