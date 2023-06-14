import React from "react";
const dummyPost = Array.from({ length: 10 });

const HomeShimmer = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:ms-0 ms-5 mb-5 min-h-screen">
        {dummyPost.map((_, index) => {
          return (
            <React.Fragment key={index + Math.random()}>
              <div className="xl:w-[24rem] lg:w-[20rem] mt-5 p-2 m-5 animate-pulse">
                <div>
                  <div className="w-full h-[200px] bg-gray-500 rounded-md"></div>
                </div>
                <div className="mt-2">
                  <div className="bg-gray-500 w-20 h-6 rounded-md mb-2"></div>
                  <div className="flex justify-between">
                    <div className="bg-gray-500 w-[80%] h-6 rounded-md"></div>
                    <div className="w-10 h-6 rounded-md bg-gray-500"></div>
                  </div>
                  <div className="mt-2">
                    {" "}
                    <div className="bg-gray-500 w-full h-3 rounded-md mb-1"></div>
                    <div className="bg-gray-500 w-full h-3 rounded-md mb-1"></div>
                    <div className="bg-gray-500 w-full h-3 rounded-md"></div>
                  </div>
                  <div className="mt-2 flex justify-start items-center">
                    <div className="bg-gray-500 rounded-full w-10 h-10"></div>
                    <div className="ms-4">
                      <div className="bg-gray-500 w-20 h-6 rounded-md"></div>
                      <div className="bg-gray-500 w-20 h-3 rounded-md mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default HomeShimmer;
