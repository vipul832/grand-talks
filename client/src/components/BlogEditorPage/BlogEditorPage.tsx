import {
  Button,
  Input,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import {
  useAddPostsMutation,
  useUpdateBlogMutation,
} from "../../App/api/postApi";
import ImageInput from "../ImageInput/ImageInput";
import { getUserInfo } from "../../App/feature/userSlice";
import { useSelector } from "react-redux";
import { EditorModules, EditorFormats } from "../../constant/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { Post, addPostData } from "../../utils/types";
import { blogSchema } from "../../validation/blogSchema";
import { toast } from "react-hot-toast";

export default function BlogEditorPage() {
  const { state } = useLocation();
  const postData = state as Post;
  const [thumbnail, setThumbnail] = useState(postData?.thumbnail ?? "");
  const [addPosts] = useAddPostsMutation();
  const userInfo = useSelector(getUserInfo);
  const navigate = useNavigate();
  const [updateBlog] = useUpdateBlogMutation();

  const formik = useFormik({
    initialValues: {
      title: postData?.title ?? "",
      desc: postData?.desc ?? "",
      content: postData?.content ?? "",
      category: postData?.category ?? "",
      username: postData?.username ?? "",
    },
    validationSchema: blogSchema,
    onSubmit: () => {},
  });

  async function handleFormSubmit(status: string, post: Post) {
    let values = formik.values;
    if (thumbnail) {
      if (status === "publish") {
        if (post) {
          try {
            await updateBlog({
              ...post,
              ...values,
              status: status,
              visibility: "public",
              thumbnail: thumbnail,
            });
            //toast
            toast.success(`Post ${status} successful`);
          } catch (error: any) {
            console.log(error?.data?.message);
          }
        } else {
          addPostsToServer(
            values,
            status,
            "public",
            thumbnail,
            userInfo.userId,
            userInfo.name,
            userInfo.profileImage
          );
          //toast
          toast.success("Post Add successful");
        }
      } else {
        if (post) {
          try {
            await updateBlog({
              ...post,
              ...values,
              status: status,
              visibility: "private",
              thumbnail: thumbnail,
            });
            //toast
            toast.success(`Post ${status} successful`);
          } catch (error: any) {
            console.log(error?.data?.message);
          }
        } else {
          addPostsToServer(
            values,
            status,
            "private",
            thumbnail,
            userInfo.userId,
            userInfo.name,
            userInfo.profileImage
          );
          //toast
          toast.success("Post Add successful");
        }
      }
    } else {
      toast.error("Add Thumbnail");
      return;
    }
    navigate("/blogpanel");
    handleFormReset();
  }

  async function addPostsToServer(
    values: addPostData,
    status: string,
    visibility: string,
    thumbnail: string,
    userId: string,
    username: string,
    userProfile: string
  ) {
    try {
      await addPosts({
        ...values,
        status: status,
        visibility: visibility,
        thumbnail: thumbnail,
        userId: userId,
        username: username,
        userProfile: userProfile,
      }).unwrap();
    } catch (error: any) {
      console.log(error?.data?.message);
    }
  }

  function handleFormReset() {
    formik.resetForm();
    setThumbnail("");
  }

  return (
    <div className="min-h-screen">
      <Typography variant="h3" className="mt-5">
        Write your thought here ....
      </Typography>

      <form
        className="mt-10 p-6"
        onSubmit={formik.handleSubmit}
        onReset={handleFormReset}
      >
        <div className="lg:flex justify-center">
          <div className="lg:w-[70%]">
            <div className="mt-5">
              <ImageInput
                image={thumbnail}
                setImage={setThumbnail}
                lable="Thumbnail Image"
              />
            </div>
            <div className="">
              <label htmlFor="title" className="block pb-1">
                Title <sup className="text-red-500">*</sup>
              </label>
              <Input
                label="Title"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.title && formik.touched.title ? true : false
                }
              />
            </div>
            <div className="text-start  mt-5">
              <label className="block pb-1">
                Category <sup className="text-red-500">*</sup>
              </label>
              <Select
                label="Category"
                id="category"
                value={formik.values.category}
                onChange={(value) => formik.setFieldValue("category", value)}
                error={
                  formik.errors.category && formik.touched.category
                    ? true
                    : false
                }
              >
                <Option value="Software">Software</Option>
                <Option value="Design">Design</Option>
                <Option value="Product">Product</Option>
                <Option value="Customer">Customer</Option>
              </Select>
            </div>
            <div className=" mt-6">
              <label htmlFor="desc" className="block pb-1">
                Description <sup className="text-red-500">*</sup>
              </label>
              <Input
                label="Description"
                name="desc"
                value={formik.values.desc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.desc && formik.touched.desc ? true : false}
              />
            </div>

            <div className=" pt-5 h-[350px]">
              <label htmlFor="content">
                Content <sup className="text-red-500">*</sup>
              </label>
              <ReactQuill
                theme="snow"
                value={formik.values.content}
                onChange={(content) => {
                  formik.setFieldValue("content", content);
                }}
                modules={EditorModules}
                formats={EditorFormats}
                className="h-52"
                id="content"
              />
            </div>
          </div>
        </div>
        <div className="pt-10 text-center">
          <Button
            type="submit"
            size="lg"
            color="deep-purple"
            className="m-2"
            onClick={() => handleFormSubmit("publish", postData)}
          >
            Publish
          </Button>
          <Button type="reset" size="lg" color="deep-purple" className="m-2">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            color="deep-purple"
            className="m-2"
            onClick={() => handleFormSubmit("draft", postData)}
          >
            Save as Draft
          </Button>
        </div>
      </form>
    </div>
  );
}
