const connection = require("./connection.js");
module.exports = async () => {
  try {
    const resp = await connection.cat.indices();
    return resp;
  } catch (e) {
    console.log(e);
  }
};
