#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');
const request = require('request');

const consoleWidth = () => {
  return parseInt(process.stdout.columns)
}

program
  .version('0.2.0')
  .arguments('<phrase>')
  .action((slng) => {
    var options = {
      method: 'GET',
      url: 'http://api.urbandictionary.com/v0/define',
      qs: {
        term: slng
      },
      headers: {
        'Cache-Control': 'no-cache',
        Accept: 'application/json'
      }
    }

    request(options, function (err, res, body) {
      if (err) throw new Error(err);
      var trimRes;
      var results = JSON.parse(body).list;

      console.log('='.repeat(consoleWidth()));

      if (results.length === 0) {
        console.log(chalk.red('No results were found, please try another phrase'));
      } else {
        if (results.length > 3) {
          trimRes = results.slice(0, 3);
        } else {
          trimRes = results;
        }
        trimRes.forEach((result) => {
          if (typeof (result.definition) !== undefined) {
            console.log('Word: ' + chalk.magenta(result.word));
            console.log('Definition: ' + chalk.magenta(result.definition));
            console.log('Score: ' + (result.thumbs_up - result.thumbs_down));
            console.log(chalk.bold.green('Ayys: ') + result.thumbs_up + ' | ' + chalk.bold.red('Nayys: ') + result.thumbs_down);
            console.log('='.repeat(consoleWidth()));
          }
        });
      }
    });
  });

program.on('--help', function () {
  console.log('');
  console.log('  Examples:');
  console.log('    $ slng gucci');
  console.log('    $ slng \'square up\'');
  console.log('');
});

program.parse(process.argv);
