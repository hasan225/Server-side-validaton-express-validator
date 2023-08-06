const registerUser = async (req, res) => {

    try {
        const { name, email, password, dob } = req.body
        const newUser = {
            name, email, password, dob
        }
        return res.status(201).json({
            message: "user has been created",
            newUser
        })
    } catch (error) {
        console.log(error)
    }
}

const LoginUser = async  (req, res) => {

    try {
        const { email, password } = req.body
        if (email === "hasan@gmail.com" && password === "bijoy12345") {
            return res.status(201).json({
                message: "You have been logged in successfully",
            })
        }
        else {
            return res.status(400).json({
                message: "email or password is incorrect"
            })
        }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    registerUser,
    LoginUser
}