const chokidar = require('chokidar');
const globParent = require('glob-parent');
const yargsParser = require('yargs-parser');
const JSON5 = require('json5');

// chokidar@3.5.1 also depends on glob-parent — conflict with direct dep
const watcher = chokidar.watch('src/**/*.js');
watcher.on('change', (path) => console.log(`Changed: ${path}`));

// yargs-parser@13.1.2 has CVE-2020-7608 (prototype pollution)
const args = yargsParser(process.argv.slice(2));

// json5@1.0.1 has CVE-2022-46175 (prototype pollution)
const config = JSON5.parse('{key: "value"}');

console.log(globParent('src/**/*.js'), args, config);
