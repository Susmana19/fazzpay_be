
//import internal
const userModel = require('../models/user.model')

const userController = {
    get:(req, res)=> {
        return userModel.get()
        .then((result)=> {
            return res.status(200).send({ message: "succes", data: result })
        }).catch((error)=> {
            return res.status(500).send({ message: error })
        })
    },

    getById: (req, res)=> {
        return userModel.getById(req.params.id)
        .then((result) => {
            return res.status(200).send({ message: "succes", data: result })
        })
    },
}

module.exports = userController;