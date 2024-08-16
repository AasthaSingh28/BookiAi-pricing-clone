import React from "react";

const Overview = (props) => {
  return (
    <div
      id="overview"
      className="h-screen flex justify-center -mt-40 items-center"
    >
      <div
        className={`bg-${props.mode} border-2 shadow-md p-8 rounded-md w-full max-w-[1000px] mx-auto`}
      >
        <h1 className="font-bold text-[#6e82e7] text-3xl mt-4">Overview</h1>
        <p className={`font-medium text-lg text-${props.mode} mt-4`}>
          The Book Generator API allows you to generate books on various topics
          using different language models. This documentation provides details
          on how to use the API, including authentication, available endpoints,
          and code examples.
        </p>
      </div>
    </div>
  );
};

export default Overview;
