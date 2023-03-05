

const transferModel = require("../models/transfer.model");

const transferController = {
  getSender: (req, res) => {
    return transferModel.getSender(req.params.id)
      .then((result) => {
        return res.status(200).send({ message: "succes", data: result });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "failed",
          data: error,
        });
      });
  },
  getReceiver: (req, res) => {
    return transferModel
      .getReceiver(req.params.id)
      .then((result) => {
        return res.status(200).send({ message: "succes", data: result });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "failed",
          data: error,
        });
      });
  },
  addTransfer: (req, res) => {
    return transferModel
      .addTransfer(req.body)
      .then((result) => {
        return res.status(201).send({
          message: "success",
          data: result,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          message: "failed",
          data: error,
        });
      });
  },
};

module.exports = transferController;