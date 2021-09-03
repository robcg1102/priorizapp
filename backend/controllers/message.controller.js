const Sms = require("../models/Sms");

const controllers = {
  allSMS: (req, res) => {
    Sms.find()
      .sort({ createdAt: -1 })
      .then((sms) => {
        res.json(sms);
      })
      .catch((err) => {
        res.json({ err });
      });
  },

  addSms: (req, res) => {
    const { sms, alert_code } = req.body;
    Sms.create({ sms, alert_code })
      .then((sms) => {
        res.json({ sms });
      })
      .catch((err) => {
        res.json({ err });
      });
  },

  deleteSms: (req, res) => {
    res.json({
      status: "SMS deleted",
    });
  },
};

module.exports = controllers;
