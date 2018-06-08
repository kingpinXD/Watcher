const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Watcher = mongoose.model("watchers");
const Manager = require("../services/GetDataFromElastic/manager");
const scheduleCronJob = require("../services/GetDataFromElastic/scheduleCronJobs");
const getIndexes = require("../services/GetDataFromElastic/getIndexes");
const _ = require("lodash");
module.exports = app => {
  app.post("/api/addnewwatcher", requireLogin, async (req, res) => {
    console.log(req.body);
    const {
      watchername,
      esindex,
      estype,
      condition,
      valuetocheck,
      action,
      polling
    } = req.body;

    watcher = new Watcher({
      watchername,
      esindex,
      estype,
      condition,
      valuetocheck,
      action,
      polling,
      createdDate: Date.now(),
      _user: req.user.id
    });
    const m = await watcher.save();
    scheduleCronJob({ type: "ADD_ONE", watchername });
    res.send(m);
  });

  app.post("/api/deletewatcher", async (req, res) => {
    const setactive = await Watcher.remove({
      watchername: req.body.watchername
    });

    res.send(setactive);
  });

  app.post("/api/cron/start", async (req, res) => {
    Manager.start(req.body.watchername);
    const setactive = await Watcher.update(
      { watchername: req.body.watchername },
      { $set: { isActive: true } }
    );

    res.send(setactive);
  });
  app.post("/api/cron/stop", async (req, res) => {
    Manager.stop(req.body.watchername);
    const setactive = await Watcher.update(
      { watchername: req.body.watchername },
      { $set: { isActive: false } }
    );

    res.send(setactive);
  });

  app.get("/api/getwatchers", async (req, res) => {
    const watchersList = await Watcher.find({});
    res.send(watchersList);
  });

  app.get("/api/getindexes", async (req, res) => {
    const r = await getIndexes();
    const array = r.split(" ");
    res.send(
      _.chain(array)
        .filter(indexname => {
          return indexname.length > 10;
        })
        .map(index => {
          const split = index.split("-");
          return split[0];
        })
        .uniq()
    );
  });
};
