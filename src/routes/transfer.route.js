
const express = require("express");
const router = express();

//import controller internal
const transferController = require("../controllers/transfer.controller");

// const formUpload = require('../../helper/formUpload')

//route recruiters
router.get("/sender/:id", transferController.getSender);
router.get("/receiver/:id", transferController.getReceiver);
router.post("/", transferController.addTransfer);

//export
module.exports = router;