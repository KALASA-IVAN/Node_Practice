const User = require("../models/user.model")
const express = require("express")
const router = express.Router()

router.post("/", async (req, res) => {
    
    // let user = await User.findOne({ email: req.body.email })
    // if (user) {
    //     res.status(401).send("The user already exists")
    // } else {
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password:req.body.password
        })

        await user.save()
        res.send(user)
    }
    // }
)

module.exports = router
