const ini = require('ini');
const ansiRegex = require('ansi-regex');

// ini@1.3.5 has CVE-2020-7788 (prototype pollution via parse)
const config = ini.parse('[section]\nkey=value');

// ansi-regex@4.1.0 has CVE-2021-3807 (ReDoS)
const regex = ansiRegex();

// webpack-dev-server@3.11.3 pulls MANY vulnerable transitives:
//   - sockjs (CVE), http-proxy-middleware, selfsigned, etc.
// node-notifier@8.0.0 pulls vulnerable which/is-wsl transitives

console.log(config, regex);
