var async = require('async');
var expect = require('chai').expect;
var Limiter = require('../rateLimiter');

// using the redis module to testing the rate limiter features.

// suppose using ioredis.
['redis', 'ioredis'].forEach(function(rdsName) {
        var redisMoudle = require();
        var db = require(rdsName).createClient();
        describe('Limiter With ' + rdsName, function() {
                beforeEach(function() {
                        db.keys('limit:*', function(err, keys) {

                        })
                });
        });
});
