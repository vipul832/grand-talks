import { useNavigate } from "react-router-dom";
import { useUpdateBlogMutation } from "../../App/api/postApi";
import { toast } from "react-hot-toast";
import DeleteConfirm from "../DeleteModel/DeleteModel";
import moment from "moment";
import { Button, Typography } from "@material-tailwind/react";
import { Post } from "../../utils/types";

type AdminBlogCardProps = {
  blog: Post;
};

export default function AdminBlogCard({ blog }: AdminBlogCardProps) {
  const navigate = useNavigate();
  const [updateBlog] = useUpdateBlogMutation();
  return (
    <div className="mt-10">
      <div className="lg:flex lg:justify-between">
        <div className="lg:flex lg:w-[70%] w-full items-center">
          <img
            src={blog.thumbnail}
            alt="thumbnail"
            className="rounded-lg object-cover"
            width="250px"
            height="160px"
          />
          <div className="md:ms-5 mt-3">
            <Typography className={"text-primaryPurple font-bold"}>
              {blog.category}
            </Typography>
            <Typography variant={"h6"} className="text-black">
              {blog.title}
            </Typography>
            <Typography className={"lg:w-[70%] text-black"}>
              {blog.desc.length <= 18
                ? ""
                : blog.desc.substring(0, 100) + "..."}
            </Typography>
            <Typography className="font-bold">
              {moment(blog.createdAt).format("Do MMM YY")}
            </Typography>
          </div>
        </div>
        <div className="whitespace-nowrap">
          <Button
            size="sm"
            className="mx-2"
            color="deep-purple"
            onClick={() => {
              navigate("/blogeditor", { state: blog });
            }}
          >
            Edit
          </Button>
          <DeleteConfirm blog={blog} />

          {blog.status === "publish" ? null : (
            <Button
              size="sm"
              className="mx-2"
              color="deep-purple"
              onClick={async () => {
                await updateBlog({
                  ...blog,
                  status: "publish",
                  visibility: "public",
                });
                /*toast */
                toast.success("Post Publish Successful");
              }}
            >
              Published
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
