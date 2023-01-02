const redis = require('redis');

const { redisToGoUrl, redisHost, redisPort } = require('./config');

// The Redis client to be used throughout the app.
let redisClient = redis.createClient();

module.exports = redisClient;
