'use strict'

const cors = require('./cors');
const morgan = require('./morgan');
const rateLimiter = require('./rateLimiter');

module.exports = {
	cors,
	morgan,
	rateLimiter,
};
