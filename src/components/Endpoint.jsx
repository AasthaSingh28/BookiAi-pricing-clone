import React from "react";

const Endpoint = (props) => {
  return (
    <div
      id="endpoints"
      className="h-screen flex justify-center lg:-mt-52 mb-40 items-center"
    >
      <div
        className={`bg-${props.mode} border-2 shadow-md p-8 rounded-md w-full max-w-[1000px] mx-auto`}
      >
        <h1 className="font-bold text-[#6e82e7] text-3xl mt-4">Endpoints</h1>
        <h3 className="font-bold text-[#6e82e7] text-xl mt-4 mb-4">
          Generate Books
        </h3>
        <p className="flex flex-row space-x-4">
          <span className="font-medium bg-cyan-400 text-black p-2 border-[1px] rounded-md border-black">
            POST
          </span>

          <span className="font-medium bg-[#6366f1] text-white p-2 border-[1px] rounded-md border-black">
            /api/generate-book
          </span>
        </p>
        <h4 className="font-bold text-[#6e82e7] text-lg mt-8 mb-4">
          Request Body
        </h4>
        <table className="w-[100%] border-separate border-spacing-0 mt-[2] overflow-hidden rounded-md border-[1px] border-slate-400 ">
          <tr className="bg-[#6366f1] font-medium space-x-4 text-[#ffffff] p-4">
            <th className="p-4 text-left border-b-slate-400 border-b-[1px]">
              Parameter
            </th>
            <th className="p-4 text-left border-b-slate-400 border-b-[1px]">
              Type
            </th>
            <th className="p-4 text-left border-b-slate-400 border-b-[1px]">
              Description
            </th>
          </tr>
          <tr>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              api
            </td>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              string
            </td>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              The API provider to use. Options: "openai" or "together"
            </td>
          </tr>
          <tr>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              model
            </td>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              string
            </td>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4",
              "llama-2-70b")
            </td>
          </tr>
          <tr>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              topic
            </td>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              string
            </td>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              The main topic or theme of the book
            </td>
          </tr>
          <tr>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              language
            </td>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              string
            </td>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              The language in which the book should be generated
            </td>
          </tr>
          <tr>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              word_count
            </td>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              integer
            </td>
            <td
              className={`p-4 text-left text-${props.mode} font-semibold border-b-slate-400 border-b-[1px]`}
            >
              The approximate number of words for the generated book
            </td>
          </tr>
        </table>

        <h4 className="font-bold text-[#6e82e7] text-lg mt-8 mb-4">
          Request Body
        </h4>
        <pre>
          <code>{}</code>
        </pre>
      </div>
    </div>
  );
};

export default Endpoint;
