import React, { useState } from "react";
import axios from "axios";

const CodeExamples = () => {
  const [jobId, setJobId] = useState(null);
  const [error, setError] = useState(null);

  const generateBook = async () => {
    const API_KEY = "your_api_key_here";
    const API_ENDPOINT = "https://tryBookAI.com/api/generate-book";

    const headers = {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    };

    const data = {
      api: "openai",
      model: "gpt-3.5-turbo",
      topic: "The Future of Artificial Intelligence",
      language: "English",
      word_count: 5000,
    };

    try {
      const response = await axios.post(API_ENDPOINT, data, { headers });
      setJobId(response.data.job_id);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
      setJobId(null); // Clear any previous job ID
    }
  };

  return (
    <div
      id="code-example"
      className="h-screen flex justify-center -mt-[2cm] items-center"
    >
      <div className="bg-[#1e293b] border-2 shadow-md p-8 rounded-md w-full max-w-[1000px] mx-4">
        <h1 className="font-bold text-[#a5b4fc] text-3xl mt-4">
          Code Examples
        </h1>
        <h3>Python</h3>
        {/* The Python code can remain as-is in your existing example */}

        <h3>React (JavaScript)</h3>
        <button onClick={generateBook}>Generate Book</button>

        {jobId && <p>Book generation started. Job ID: {jobId}</p>}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default CodeExamples;
