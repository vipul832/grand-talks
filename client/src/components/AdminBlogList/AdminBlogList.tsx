import { Typography } from "@material-tailwind/react";
import { Post } from "../../utils/types";
import AdminBlogCard from "./AdminBlogCard";

type AdminBlogListProps = {
  data: Post[];
  tab: string;
};

export default function AdminBlogList({ data, tab }: AdminBlogListProps) {
  return (
    <>
      {data.length > 0 ? (
        data.map((blog, index) => {
          return <AdminBlogCard key={index} blog={blog} />;
        })
      ) : tab === "publish" ? (
        <div className="text-center">
          <Typography
            className="text-2xl font-bold mt-8 tracking-[0.1rem]"
            variant="paragraph"
          >
            Write Some Blog
          </Typography>
          <div className="flex justify-center mt-8">
            <img
              src="https://ik.imagekit.io/fqy6m4jmj/weimages/publish_error.svg?updatedAt=1686659275686"
              alt="publish error"
              width="500px"
            />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Typography
            className="text-2xl font-bold mt-8 tracking-[0.1rem]"
            variant="paragraph"
          >
            All Work Done
          </Typography>
          <div className="flex justify-center mt-8">
            <img
              src="https://ik.imagekit.io/fqy6m4jmj/weimages/draft_error.svg?updatedAt=1686659275475"
              alt="publish error"
              width="500px"
            />
          </div>
        </div>
      )}
    </>
  );
}
