const express = require("express");
const userrouter = express.Router();
const {userSignup, userLogin, verifytoken, verifyemail, UpdateProfile} = require("../controller/user.controller");
const Authtoken = require("../middleware/sessionservice")
const validationSchema = require("../middleware/user.validation")
const validateUser = require("../middleware/validator")



userrouter.post("/signup", validateUser(validationSchema), userSignup)
userrouter.post("/login", userLogin)
userrouter.get("/verify", verifytoken)
userrouter.get("/verify/email/:email", verifyemail)
userrouter.patch("/upload/profile", Authtoken,UpdateProfile)



module.exports = userrouter