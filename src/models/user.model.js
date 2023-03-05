
const db = require("../../helper/connection")
const { v4: uuidv4 } = require('uuid')

const userModel = {
    get: () => {
        return new Promise((resolve, reject) => {
            db.query(
                'SELECT * from tb_users', 
                (err, result) => {
                    if (err) {
                        return reject(err.message)
                    } else {
                        return resolve(result.rows)
                    }
            });
        })
    },

    getById: (id)=> {
        return new Promise((resolve, reject)=> {
            db.query(
                `SELECT * from tb_users WHERE id='${id}'`,
                (err, result) => {
                    if (err) {
                    return reject(err.message)
                    } else {
                    return resolve(result.rows[0])
                    }
            });
        })
    },
}

module.exports = userModel;