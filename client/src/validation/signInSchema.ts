import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
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
});
