import React from "react";
import {
  Typography,
  Button,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, removeUser } from "../../App/feature/userSlice";
import { setSignOutUser } from "../../App/feature/authSlice";
import { FaPowerOff } from "react-icons/fa";
import { toast } from "react-hot-toast";

const profileMenuItems = [
  {
    label: "Sign Out",
    icon: <FaPowerOff className="text-red-500" />,
  },
];

export default function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src={userInfo.profileImage}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                closeMenu();
                dispatch(setSignOutUser());
                dispatch(removeUser());
                toast.success("Logout Successful");
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {icon}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
