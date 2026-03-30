const mkdirp = require('mkdirp');
const request = require('request');
const optimist = require('optimist');

// mkdirp@0.5.1 pulls minimist@0.0.8 (CVE-2021-44906) as transitive
mkdirp('/tmp/test-dir', (err) => {
  if (err) console.error(err);
});

// request@2.88.2 pulls tough-cookie@2.5.0 (CVE-2023-26136) and qs@6.5.3 (CVE-2022-24999)
request('https://example.com', (err, res, body) => {
  console.log(body);
});

// optimist@0.6.1 also pulls minimist@0.0.8 — MULTI-PARENT case
// Both mkdirp and optimist depend on vulnerable minimist
const argv = optimist.argv;
console.log(argv);
