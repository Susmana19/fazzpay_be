const db = require("../../helper/connection")
const { v4: uuidv4 } = require("uuid");

const transferModel = {
  getSender: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM tb_transfer WHERE id_sender='${id}'`,
        (err, result) => {
          if (result.rows.length === 0) return reject("Id not found!");
          if (err) {
            return reject(err.message);
          } else {
            return resolve(result.rows);
          }
        }
      );
    });
  },
  getReceiver: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM tb_transfer WHERE id_receiver='${id}'`,
        (err, result) => {
          if (err) {
            return reject(err.message);
          } else {
            if (result.rows.length === 0) return reject("Id not found!");
            return resolve(result.rows);
          }
        }
      );
    });
  },
  addTransfer: ({
    id_sender,
    id_receiver,
    amount,
    notes,
    sender_name,
    receiver_name,
  }) => {
    return new Promise((success, failed) => {
      db.query(
        `INSERT INTO tb_transfer VALUES ($1,$2,$3,$4,$5,$6,$7)`,
        [
          uuidv4(),
          id_sender,
          id_receiver,
          amount,
          notes,
          sender_name,
          receiver_name,
        ],
        (error, result) => {
          if (error) {
            return failed(error.message);
          } else {
            return success("Transfer Berhasil");
          }
        }
      );
    });
  },
};

module.exports = transferModel;