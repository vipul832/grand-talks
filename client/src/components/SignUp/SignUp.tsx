import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { signUpSchema } from "../../validation/signUpSchema";
import { useState } from "react";
import ImageInput from "../ImageInput/ImageInput";
import { useSignUpUserMutation } from "../../App/api/authApi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { getAuthStatus } from "../../App/feature/authSlice";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState<string>("");
  const [signUpUser] = useSignUpUserMutation();
  const { authStatus } = useSelector(getAuthStatus);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      if (!profilePic) {
        console.log("Upload image");
        return;
      } else {
        try {
          const response = await signUpUser({ ...values, profilePic }).unwrap();
          //toast
          toast.success(response.message);
          navigate("/signin");
        } catch (error: any) {
          toast.error(error?.data?.message);
        }
      }
    },
  });

  if (authStatus) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="min-h-screen relative flex justify-center items-center my-20">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[28rem] shadow flex justify-center rounded-lg">
        <Card color="transparent" shadow={false} className="p-3">
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={formik.handleSubmit}
          >
            <ImageInput
              image={profilePic}
              setImage={setProfilePic}
              lable="Photo+"
            />
            <div className="mb-4 flex flex-col gap-4">
              <label htmlFor="username">
                Name <sup className="text-red-500">*</sup>
              </label>
              <Input
                id="username"
                size="lg"
                label="Name"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.username && formik.touched.username
                    ? true
                    : false
                }
              />
              {formik.errors.username && formik.touched.username ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.username}
                </span>
              ) : null}
              <label htmlFor="email">
                Email <sup className="text-red-500">*</sup>
              </label>
              <Input
                id="email"
                size="lg"
                label="Email"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.email && formik.touched.email ? true : false
                }
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.email}
                </span>
              ) : null}

              {/* have to add password encryption  */}
              <label htmlFor="password">
                Password <sup className="text-red-500">*</sup>
              </label>
              <Input
                id="password"
                type="password"
                size="lg"
                label="Password"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.password && formik.touched.password
                    ? true
                    : false
                }
              />
              {formik.errors.password && formik.touched.password ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.password}
                </span>
              ) : null}
              <label htmlFor="confirmPassword">
                Confirm Password <sup className="text-red-500">*</sup>
              </label>
              <Input
                id="confirmPassword"
                type="password"
                size="lg"
                label="Confirm Password"
                color="deep-purple"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.confirmPassword &&
                  formik.touched.confirmPassword
                    ? true
                    : false
                }
              />
              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <span className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </span>
              ) : null}
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href=""
                    className="font-medium transition-colors hover:text-purple-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="checkbox"
              containerProps={{ className: "-ml-2.5" }}
              color="deep-purple"
            />

            {formik.errors.checkbox && formik.touched.checkbox ? (
              <span className="text-red-500 text-sm block">
                {formik.errors.checkbox}
              </span>
            ) : null}
            {/* <Link to={"/signin"}>
            </Link> */}
            <Button
              className="mt-6"
              color="deep-purple"
              fullWidth
              type="submit"
            >
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-medium text-purple-500 transition-colors hover:text-blue-700"
              >
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
