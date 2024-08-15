import React, { useState } from "react";

const Authentication = (props) => {
  const [apikey, setApiKey] = useState("");
  const [error, setError] = useState("");

  const generateApiKey = () => {
    fetch("http://localhost:5000/generate-api-key", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.api_key) {
          setApiKey(data.api_key);
        } else {
          setError("Failed to generate API key!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Error generating API key.");
      });
  };
  return (
    <div
      id="authentication"
      className="h-screen flex justify-center -mt-[10cm] items-center"
    >
      <div
        className={`bg-${props.mode} border-2 shadow-md p-8 rounded-md w-full max-w-[1000px] mx-4`}
      >
        <h1 className="font-bold text-[#6e82e7] text-3xl mt-4">
          Authentication
        </h1>
        <p
          className={`font-medium text-lg flex flex-col text-${props.mode} mt-4`}
        >
          To use the API, you need to include your API key in the header of each
          request:
          <pre
            className={`bg-${props.mode}  text-${props.mode} border-[1px] border-slate-400 rounded-md p-4 whitespace-pre-wrap overflow-x-auto mt-4`}
          >
            <code className={`border-[1px] border-slate-400 rounded-md p-2`}>
              X-API-Key: YOUR_API_KEY
            </code>
          </pre>
          To generate an API key, use the button below:
          <button
            onClick={generateApiKey}
            className="bg-[#22d3ee] text-[#0f172a] border-none p-3 rounded-lg cursor-pointer font-medium text-base hover:bg-[#0ea5e9] transition-colors duration-300 ease-linear transform hover:scale-105 w-56 mt-2"
            id="generateApiKey"
          >
            Generate API Key
          </button>
          {apikey && (
            <div
              className={`bg-${props.mode} border-[1px] border-slate-400 rounded-md p-4 whitespace-pre-wrap overflow-x-auto mt-4`}
              id="apiKeyDisplay"
            >
              <p>
                Your API Key: <strong> {apikey} </strong>
              </p>
            </div>
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </p>
      </div>
    </div>
  );
};

export default Authentication;
