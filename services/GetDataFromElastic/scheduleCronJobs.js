const Manager = require("./manager");
const getData = require("./getData");
const mongoose = require("mongoose");
const Watcher = mongoose.model("watchers");

module.exports = async options => {
  let Activewatchers = null;
  switch (options.type) {
    case "ADD_ALL":
      Activewatchers = await Watcher.find({ isActive: true });
      break;

    case "ADD_ONE":
      Activewatchers = await Watcher.find({
        watchername: options.watchername
      });
      break;
  }

  Activewatchers.forEach(watcher => {
    Manager.add(watcher.watchername, "* * * * * *", getData);
  });
};
