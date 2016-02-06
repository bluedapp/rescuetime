'use strict';

const chalk = require('chalk');
let entries = [];

function time(start) {
  return Date.now() - start;
}

exports.start = name => {
  entries[name] = Date.now();
}

exports.end = (name, callback) => {
  const delta = time(entries[name]);
  console.log(`${chalk.blue.bold(name)} : ${chalk.green.bold(delta)}`);
  if(callback) callback(delta);
}
