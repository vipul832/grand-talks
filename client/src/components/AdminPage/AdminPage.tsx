import { useSelector } from "react-redux";
import { getUserInfo } from "../../App/feature/userSlice";
import { Button, Typography } from "@material-tailwind/react";
import AdminTabs from "../Tabs/adminTabs/adminTabs";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const userInfo = useSelector(getUserInfo);
  return (
    <div className="blog-admin min-h-screen relative">
      <div className="flex justify-center">
        <div className="lg:w-[80%] w-[88%] p-2 mt-10 shadow-lg rounded-lg backdrop-blur-md">
          {/* Introduction area */}
          <div className="flex lg:justify-between justify-center h-full px-12 items-center">
            <div>
              <Typography
                variant={"h3"}
                className=" font-bold whitespace-nowrap"
              >
                Hello,
                <span className="lg:text-[2.5rem] text-[1.2rem] text-primaryPurple">
                  {userInfo.name} !
                </span>
              </Typography>
              <div className="lg:w-96 h-20 text-black w-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
                quae quisquam excepturi itaque hic maxime.
              </div>
              <div className="mt-10">
                <Link to="/blogeditor">
                  <Button
                    variant="gradient"
                    className="text-md animate-bounce"
                    size="md"
                    color="deep-purple"
                  >
                    Write Blog Here
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:flex hidden">
              <img src="./assets/content_creator.svg" alt="content-creator" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-20 justify-center flex">
        <AdminTabs />
      </div>
    </div>
  );
};

export default AdminPage;
