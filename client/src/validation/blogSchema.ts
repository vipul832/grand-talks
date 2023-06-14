import * as Yup from "yup";

export const blogSchema = Yup.object().shape({
  title: Yup.string().required("Title  is required !"),
  desc: Yup.string()
    .min(10, "Must be 10 characters or More")
    .required("Description is required !"),
  category: Yup.string().required("Category is Required"),  
});
