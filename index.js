#!/usr/bin/env node

var program = require('commander'),
  request = require('request');

program
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
      if (results.length > 3) {
        trimRes = results.slice(0, 3);
      } else {
        trimRes = results;
      }
      trimRes.forEach((result) => {
        if (typeof (result.definition) !== undefined) {
          console.log("=======================\n" + result.definition);
        }
      });
    });
  })
  .parse(process.argv);