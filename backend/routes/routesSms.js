const router = require("express").Router();
const controllers = require("../controllers/message.controller");

router.get("/", controllers.allSMS);
router.post("/newsms", controllers.addSms);
router.delete("/deletesms", controllers.deleteSms);

module.exports = router;