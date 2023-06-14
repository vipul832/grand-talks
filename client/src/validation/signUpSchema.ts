import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(10, "Must be 10 characters or More")
    .matches(/[a-zA-Z]+/, "Invalid Name")
    .required("User name is required !"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required !"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character(!@#$%&*)"
    )
    .required("Password is required !"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "Confirm password must match with above password !"
    )
    .required("Confirm password is required !"),
  checkbox: Yup.bool() // use bool instead of boolean
    .oneOf([true], "You must accept the terms and conditions"),
});
