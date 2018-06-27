var elasticsearch = require("elasticsearch");
const keys = require("../../config/keys");

module.exports = new elasticsearch.Client({
  hosts: keys.elasticHost,
  httpAuth: keys.elasticAuth
});
