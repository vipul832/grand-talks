import React from "react";
const dummyPost = Array.from({ length: 5 });

const AdminShimmer = () => {
  return (
    <>
      <div className="mt-10 flex flex-col">
        {dummyPost.map((_, index) => {
          return (
            <React.Fragment key={index + Math.random()}>
              <div className="lg:flex block justify-between animate-pulse mb-10">
                <div className="lg:flex block">
                  <div className="w-[250px] h-[160px] rounded-lg bg-gray-500"></div>
                  <div className="lg:ms-3 mt-2 lg:mt-0">
                    <div className="w-20 h-4 bg-gray-500 rounded-md mb-5"></div>
                    <div className="mt-2 w-60 h-5 bg-gray-500 rounded-md"></div>
                    <div className="mt-2 w-60 h-5 bg-gray-500 rounded-md"></div>
                    <div className="mt-2 w-60 h-5 bg-gray-500 rounded-md"></div>
                    <div className="mt-2 w-20 h-4 bg-gray-500 rounded-md"></div>
                  </div>
                </div>
                <div className="flex gap-2 mt-2 lg:mt-0">
                  <div className="w-20 h-7 rounded-md bg-gray-500"></div>
                  <div className="w-20 h-7 rounded-md bg-gray-500"></div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default AdminShimmer;
