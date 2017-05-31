'use strict'

var request = require('supertest');
var expect  = require('chai').expect;
var logger  = require('../morgan/');

function noop_middleware(req, res, next) {
        next();
}

function createServer(logger) {
        var middle = noop_middleware;
        return http.createServer(function onRequest(req, res) {

        })
}

describe('middleware-morgan check', function() {
        it('should say OK', function(done) {
                expect(logger()).to.equal('Testing OK');
        })
})

describe('should return a 500 error', function() {

});

describe('check status code', function() {

});

describe('check logs format' , function() {

});

describe('check parsing format', function() {

});

describe('check logging to DB', function() {

})
