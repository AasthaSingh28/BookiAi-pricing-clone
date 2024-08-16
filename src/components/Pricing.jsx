import React from "react";

const Pricing = (props) => {
  return (
    <div
      id="pricing"
      className="h-screen flex justify-center lg:-mt-36 items-center"
    >
      <div
        className={`bg-${props.mode} border-2 shadow-md p-8 rounded-md w-full max-w-[1000px] mx-auto`}
      >
        <h1 className="font-bold text-[#6e82e7] text-3xl mt-4">API Pricing</h1>
        <p className={`font-medium text-${props.mode} text-base`}>
          {" "}
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>
        <table className="w-[100%] border-separate border-spacing-0 mt-2 overflow-hidden rounded-md border-[1px] border-slate-400 ">
          <tr className="bg-[#6366f1] font-medium space-x-4 text-[#ffffff] p-4">
            <th
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              API
            </th>
            <th
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              Model
            </th>
            <th
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              Price per 1K tokens
            </th>
          </tr>

          <tr>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              OpenAI
            </td>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              GPT-3.5
            </td>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              $0.002
            </td>
          </tr>
          <tr>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              OpenAI
            </td>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              GPT-4
            </td>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              $0.03
            </td>
          </tr>
          <tr>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              Together AI
            </td>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              Llama-2-70b
            </td>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              $0.0008
            </td>
          </tr>
          <tr>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              Together AI
            </td>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              Llama-2-13b
            </td>
            <td
              className={`p-4 text-left  text-${props.mode} font-bold border-b-slate-400 border-b-[1px]`}
            >
              $0.0006
            </td>
          </tr>
        </table>

        <h3 className="font-bold text-[#6e82e7] text-xl mt-4 mb-4">
          Token Estimation
        </h3>
        <p className={`font-medium text-${props.mode} text-base`}>
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </p>
        <h3 className="font-bold text-[#6e82e7] text-xl mt-4 mb-4">Billing</h3>
        <p className={`font-medium text-${props.mode} text-base`}>
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
