import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import BlogList from "../../BlogList/BlogList";
import { useGetPostsQuery } from "../../../App/api/postApi";
import Pagination from "../../Paginate/Pagination";
import { useSelector } from "react-redux";
import { getSearchText } from "../../../App/feature/searchSlice";
import HomeShimmer from "../../Shimmer/HomeShimmer";

export default function HomeTabs() {
  const [activeTab, setActiveTab] = React.useState("view_all");
  const { search } = useSelector(getSearchText);
  const [page, setPage] = useState(0);
  const { data, isFetching } = useGetPostsQuery({
    category: activeTab,
    page: page + 1,
    limit: 10,
    search: search,
  });
  console.log("home page", page);
  const totalPage = data?.totalPages;
  const data1 = [
    {
      label: "View all",
      value: "view_all",
      desc: <BlogList posts={data ? data.posts : []} />,
    },
    {
      label: "Design",
      value: "Design",
      desc: <BlogList posts={data ? data.posts : []} />,
    },
    {
      label: "Product",
      value: "Product",
      desc: <BlogList posts={data ? data.posts : []} />,
    },
    {
      label: "Software",
      value: "Software",
      desc: <BlogList posts={data ? data.posts : []} />,
    },
    {
      label: "Customer",
      value: "Customer",
      desc: <BlogList posts={data ? data.posts : []} />,
    },
  ];
  return (
    <>
      <Tabs value={activeTab} className="min-h-screen mt-20 mb-16">
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 items-center lg:w-[40%] overflow-auto z-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-purple-600 shadow-none rounded-none",
          }}
        >
          {data1.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => {
                setActiveTab(value);
                setPage(0);
              }}
              className={`${
                activeTab === value ? "text-purple-600" : ""
              } whitespace-nowrap`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {isFetching && <HomeShimmer />}
          {!isFetching &&
            data1?.map(({ value, desc }) => (
              <TabPanel key={value} value={value} className="p-0">
                {desc}
              </TabPanel>
            ))}
          {!isFetching && totalPage! > 1 ? (
            <Pagination
              totalPage={totalPage ? totalPage : 0}
              setPage={setPage}
              page={page}
            />
          ) : null}
        </TabsBody>
      </Tabs>
    </>
  );
}
