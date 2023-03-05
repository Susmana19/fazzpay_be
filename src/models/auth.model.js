
const db = require("../../helper/connection")
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {JWT_PRIVATE_KEY} = process.env

const authModel = {
    login: ({ email, password })=> {
        return new Promise((resolve, reject)=> {
            db.query(`SELECT * FROM tb_auth WHERE email=$1`, [email], (err, result)=> {
                //username = unique || email = unique
                if(err) return reject(err.message)
                // if(result.rowCount == 0) return reject('Kamu belum register')
                if(result.rows.length == 0) return reject('email/password is not correct')               
                bcrypt.compare(password, result.rows[0].password,
                        (err, hashingResult)=> {
                            if(err) return reject('email/password is not correct')
                            if(!hashingResult) return reject('email/password is not correct')                                       
                            return resolve(result.rows[0])   
                        });
            })
        })
    },

    register: ({firstname, lastname, email, password})=> {
        return new Promise((resolve, reject)=> {
            db.query(
                `INSERT INTO tb_auth (id, firstname, lastname, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
                [uuidv4(), firstname, lastname, email, password],
                (err, result) => {
                    if (err) {
                        return reject(err.message)
                    } else {
                        db.query(
                            `INSERT INTO tb_users (id, firstname, lastname, email) VALUES ($1, $2, $3, $4)`,
                            [result.rows[0].id, firstname, lastname, email],
                            (err, result) => {
                                if (err) {
                                    return reject(err.message)
                                } else {
                                    return resolve("REGISTER SUCCESS")
                                }                       
                            }
                        )
                    
                    }
            });
        })
    },


}

module.exports = authModel;