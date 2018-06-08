const connection = require("./connection.js");
module.exports = async () => {
  const resp = await connection.search({
    index: "perfmon_web04_filebeat-2018.02.05",
    type: "perfmon_web04",
    body: {
      query: { match_all: {} },
      size: 1,
      sort: [
        {
          _timestamp: {
            order: "desc"
          }
        }
      ]
    }
  });

  const value =
    resp.hits.hits[0]._source
      .NET_CLR_Memory_w3wp_1_Promoted_Finalization_Memory_from_Gen_0;

  // console.log(value);
};
