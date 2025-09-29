const yup = require("yup")

const usernameRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{3,12}$/

const validationSchema =  yup.object({
    username:yup.string().min(3, "Username can not be less than three characters").matches(usernameRegex, "username must be unique").required("Username  is required"),
    password:yup.string().trim().min(3, "password cannot be less than three characters").required("password is required"),
    email:yup.string().trim().email("Must be a valid email address").required("email is required"),
})

module.export = validationSchema