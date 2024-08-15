import React from "react";

const Tutorial = (props) => {
  return (
    <div
      id="tutorial"
      className="h-screen flex justify-center -mt-[2cm] items-center"
    >
      <div
        className={`bg-${props.mode} border-2 shadow-md p-8 rounded-md w-full max-w-[1000px] mx-4`}
      >
        <h1 className="font-bold text-[#6e82e7] text-3xl mt-4">Tutorial</h1>
        <h3 className="font-bold text-[#6e82e7] text-xl mt-4 mb-4">
          Step 1: Obtain an API Key
        </h3>
        <p className={`font-medium text-${props.mode} font-semibold text-base`}>
          Generate an API key using the button in the Authentication section
          above.
        </p>

        <h3 className="font-bold text-[#6e82e7] text-xl mt-4 mb-4">
          Step 2: Make a Request
        </h3>
        <p className={`font-medium text-${props.mode} font-semibold text-base`}>
          Use your preferred programming language or tool to make a POST request
          to the /api/generate-book endpoint. Include your API key in the header
          and the required parameters in the request body.
        </p>

        <h3 className="font-bold text-[#6e82e7] text-xl mt-4 mb-4">
          Step 3: Handle the Response
        </h3>
        <p className={`font-medium text-${props.mode} font-semibold text-base`}>
          The API will return a response with a job ID. You can use this ID to
          check the status of your book generation job.
        </p>

        <h3 className="font-bold text-[#6e82e7] text-xl mt-4 mb-4">
          Step 4: Retrieve the Generated Book
        </h3>
        <p className={`font-medium text-${props.mode} font-semibold text-base`}>
          Once the job is complete, you can retrieve the generated book using
          the job ID (endpoint to be implemented).
        </p>
      </div>
    </div>
  );
};

export default Tutorial;
