const mongoose = require("mongoose");
const { Schema } = mongoose;

const watcherSchema = new Schema({
  watchername: String,
  esindex: String,
  estype: String,
  condition: String,
  valuetocheck: String,
  polling: Number,
  action: String,
  isActive: { type: Boolean, default: true },
  recipient: { type: String, default: "tanmay.bhattacharya.smit@gmail.com" },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  createdDate: Date
});
mongoose.model("watchers", watcherSchema);
