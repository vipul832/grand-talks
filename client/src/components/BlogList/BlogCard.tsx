import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { Post } from "../../utils/types";
import { BsArrowUpRight } from "react-icons/bs";
import moment from "moment";

type BlogCardProp = {
  title: string;
  body: string;
  id: string;
  category: string;
  img: string;
  blogInfo: Post;
  userProfile: string;
};

export default function BlogCard({
  title,
  img,
  category,
  body,
  id,
  blogInfo,
  userProfile,
}: BlogCardProp) {
  const navigate = useNavigate();
  return (
    <Card
      className="xl:w-[24rem] lg:w-[20rem] shadow-none mt-5 m- xl:h-[28rem] flex flex-col"
      id={id}
    >
      <CardHeader className="p-0" floated={false} shadow={false}>
        <img
          src={img}
          alt=""
          className="w-full h-[200px] md:object-cover object-fill"
        />
      </CardHeader>
      <CardBody className="pt-3">
        <Typography className="text-primaryPurple font-bold text-sm">
          {category}
        </Typography>
        <div className="flex justify-between">
          <Link to="/blog" state={blogInfo}>
            <Typography
              variant="h5"
              className="text-black font-bold underline cursor-pointer"
            >
              {title.length <= 15 ? title : title.substring(0, 40) + "..."}
            </Typography>
          </Link>
          <div className="md:block hidden">
            <Button
              variant="text"
              size="sm"
              className="text-black text-xl"
              onClick={() => navigate("/blog", { state: blogInfo })}
            >
              <BsArrowUpRight />
            </Button>
          </div>
        </div>
        <div className="mt-2 text-sm">
          {body.length <= 18 ? body : body.substring(0, 100) + "..."}
        </div>
      </CardBody>
      <CardFooter className="py-0 pb-2">
        <div className="flex items-center justify-start">
          <Avatar
            size="md"
            variant="circular"
            alt={blogInfo.username}
            src={userProfile}
            className="border-2 border-white hover:z-10"
          />
          <div className="ms-3">
            <Typography className="text-sm font-bold text-black">
              {blogInfo.username}
            </Typography>
            <Typography className="text-sm">
              {moment(blogInfo.createdAt).format("Do MMM YY")}
            </Typography>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
