const router = require("express").Router()
const { runValidation } = require("../validation");
const {registerUser, LoginUser} = require("../controllers/user");
const { userRegistrationValidator, userLoginValidator } = require("../validation/auth");

router.post("/register",
    userRegistrationValidator,
    runValidation
    , registerUser)


router.post("/login",
    userLoginValidator,
    runValidation,
    LoginUser
    )

module.exports = router