const User = require('../models/usermodel')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken')

const test = (req, res) => {
    res.json("test is working")
}

// Register Endpoint 

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Check it name was entered 
        if (!name) {
            return res.json(
                {
                    error: "name is required"
                }
            )
        }
        // Check if password was entered
        if (!password || password.lenght < 6) {
            return res.json({
                error: "Password is required and should be atleast 6 character"
            })
        }
        // Check if password was entered
        const exit = await User.findOne({ email })
        if (exit) {
            return res.json({
                error: "Email is taken already"
            })
        }

        const hashedPassword = await hashPassword(password)

        // create user in database
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        return res.json(user)
    } catch (error) {
        console.log("error in register : ", error)
    }
}

// Login endpoints 

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // check if user exit 
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({
                error: 'No email found'
            })
        }
        // check if password match
        const match = await comparePassword(password, user.password)
        if (match) {
            // res.json('password matched ')
            jwt.sign({ email: user.id, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user)
            })
        }

        if (!match) {
            res.json({
                error: 'password do not matched'
            })
        }

    } catch (error) {
        console.log("error in login : ", error)
    }
}


const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user)
        })
    }
    else {
        res.json(null)
    }

}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}