'use strict';

const humanize = require('humanize-number');
const chalk = require('chalk');
let entries = [];

function time(start) {
  var delta = new Date - start;
  delta = delta < 10000
    ? delta + 'ms'
    : Math.round(delta / 1000) + 's';
  return humanize(delta);
}

exports.start = name => {
  entries[name] = Date.now();
}

exports.end = name => {
  const delta = time(entries[name]);
  console.log(`${chalk.blue.bold(name)} : ${chalk.green.bold(delta)}`);
}
