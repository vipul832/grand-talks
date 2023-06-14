import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import AdminBlogList from "../../AdminBlogList/AdminBlogList";
import { getUserInfo } from "../../../App/feature/userSlice";
import { useSelector } from "react-redux";
import { useGetAdminBlogsQuery } from "../../../App/api/postApi";
import AdminShimmer from "../../Shimmer/AdminShimmer";

export default function AdminTags() {
  const [activeTab, setActiveTab] = React.useState("publish");
  const userInfo = useSelector(getUserInfo);
  const { data, isFetching } = useGetAdminBlogsQuery({
    id: userInfo.userId,
    status: activeTab,
  });
  console.log(data);
  const blogTabs = [
    {
      label: "Publish",
      value: "publish",
      desc: <AdminBlogList data={data ? data : []} tab={activeTab} />,
    },
    {
      label: "Draft",
      value: "draft",
      desc: <AdminBlogList data={data ? data : []} tab={activeTab} />,
    },
  ];
  return (
    <Tabs
      value={activeTab}
      className="mt-20 mb-16 w-[90%] z-0 backdrop-blur-md p-4 rounded-md"
    >
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 items-center lg:w-[40%] overflow-auto"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-purple-600 shadow-none rounded-none",
        }}
      >
        {blogTabs.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`${
              activeTab === value ? "text-purple-600" : ""
            } whitespace-nowrap`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {isFetching && <AdminShimmer />}
        {!isFetching &&
          blogTabs.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="p-0">
              {desc}
            </TabPanel>
          ))}
      </TabsBody>
    </Tabs>
  );
}
