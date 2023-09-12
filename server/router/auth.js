const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')
require('../db/conn')
const User = require('../model/userSchema')

router.get('/', (req, res) => {
    res.send("Hello this is from server router")
})

const cookieParser = require("cookie-parser")
router.use(cookieParser())



router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.json({ error: "please filled the properly" })
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" })
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Password are not matching" })
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });
            await user.save();
            res.status(201).json({ message: "User register successful" })
        }



    } catch (err) {
        console.log(err);
    }
})


router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" })
        }
        const userLogin = await User.findOne({ email: email })
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            const token = await userLogin.generateAuthToken();
            console.log(token)
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: "user password wrong" })
            } else {
                res.json({ message: "User Signin Succesful" })
            }
        } else {
            res.json({ message: "User Signin email  is worng" })
        }

    } catch (err) {
        console.log(err)
    }
});
router.get('/data', authenticate, (req, res) => {
    console.log('This is about')
    res.send(req.rootUser)
})
// router.get('/data', (req, res) => {
//     // console.log("Hello my about");
//     res.send(req.rootUser);
//     // res.send("hello about world form server")
// })
module.exports = router;