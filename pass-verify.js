//traemos la libreria bcrypt
const bcrypt = require('bcrypt');

async function verifyPassword(){
  const myPassword = 'admin123';
  const hash = '$2b$10$DdDT45NFcNdcPMB3iIV34Opj/Javqxr5RlbJej1m6f6FpuPw01tHi';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
