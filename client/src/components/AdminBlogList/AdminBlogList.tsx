import { Typography } from "@material-tailwind/react";
import { Post } from "../../utils/types";
import publishError from "../../../public/assets/publish error.svg";
import draftError from "../../../public/assets/draft error.svg";
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
            <img src={publishError} alt="publish error" width="500px" />
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
            <img src={draftError} alt="publish error" width="500px" />
          </div>
        </div>
      )}
    </>
  );
}
