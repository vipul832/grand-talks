import { Typography, Avatar } from "@material-tailwind/react";
import { Navigate, useLocation } from "react-router-dom";
import { Post } from "../../utils/types";

export default function BlogContentPage() {
  const { state } = useLocation();
  const blogInfo = state as Post;

  if (!blogInfo) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="min-h-screen lg:mx-20 mx-6">
      <div className="mt-10">
        <div className="flex justify-center mt-6 flex-col">
          <Typography variant={"h2"} className={"lg:w-[80%]"}>
            {blogInfo.title}
          </Typography>
          <Typography
            variant={"paragraph"}
            className={"text-gray-600 lg:w-[70%] mt-2"}
          >
            {blogInfo.desc}
          </Typography>
          <img
            src={blogInfo.thumbnail}
            alt=""
            className="lg:w-[70%] w-full rounded-2xl mt-6 bg-cover h-[400px] object-cover"
          />
          <div className="md:flex justify-between block mt-3 mb-6 text-justify leading-8">
            <div
              className="lg:w-[70%] w-full content-area mt-5"
              dangerouslySetInnerHTML={{ __html: blogInfo.content }}
            ></div>
            <div className="mt-3">
              <div className="flex items-center justify-start">
                <Avatar
                  size="md"
                  variant="circular"
                  alt={blogInfo.username}
                  src={blogInfo.userProfile}
                  className="border-2 border-white hover:z-10"
                />
                <div className="ms-3">
                  <Typography className="text-sm font-bold text-black">
                    {blogInfo.username}
                  </Typography>
                  <Typography className="text-sm">20 Jan 2024</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
