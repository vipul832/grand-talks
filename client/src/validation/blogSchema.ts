import * as Yup from "yup";

export const blogSchema = Yup.object().shape({
  title: Yup.string().required("Title  is required !"),
  desc: Yup.string()
    .matches(/^\s*\S+(?:\s+\S+){14,}\s*$/, "should contain 15 or more words")
    .required("Description is required !"),
  category: Yup.string().required("Category is Required"),
});
