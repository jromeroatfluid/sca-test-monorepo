const moment = require('moment');
const _ = require('underscore');
const forge = require('node-forge');

function formatDate(date) {
  return moment(date).format('YYYY-MM-DD');
}

function encrypt(text, key) {
  const cipher = forge.cipher.createCipher('AES-CBC', key);
  cipher.start({ iv: forge.random.getBytesSync(16) });
  cipher.update(forge.util.createBuffer(text));
  cipher.finish();
  return cipher.output.toHex();
}

module.exports = { formatDate, encrypt, _ };
