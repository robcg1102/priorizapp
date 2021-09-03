const { model, Schema } = require("mongoose");

const SmsSchema = new Schema(
  {
    sms: String,
    alert_code: String,
    sender: {type: String, default: "¿Quién mandó?"},
    for: {type: String, default: "¿Para quién es?"},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Sms = model("Sms", SmsSchema);
module.exports = Sms;
