import { useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

export default function Form({
  address,
  connect,
  getter,
  setter,
  valueContract,
  setterLoading,
}) {
  const [valueInput, setValueInput] = useState(0);

  return (
    <div className="bg-white shadow-md rounded px-8 py-6 w-11/12 max-w-lg">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="value"
        >
          Value
        </label>
        <input
          id="value"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Value"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
      </div>
      <div className="mb-1 flex flex-col space-y-1 lg:flex-row lg:space-y-0 lg:space-x-1">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full lg:w-3/6"
          onClick={() => {
            setter(valueInput);
          }}
        >
          Set Value
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded w-full lg:w-3/6"
          onClick={getter}
        >
          Get Value
        </button>
      </div>
      <div className="space-y-3 flex flex-col items-center">
        {address ? (
          <button
            className="bg-teal-900 text-white py-2 rounded w-full cursor-not-allowed text-sm"
            disabled={true}
          >
            Connected to: {address}
          </button>
        ) : (
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 rounded w-full"
            onClick={connect}
          >
            Connect to Wallet
          </button>
        )}
        {setterLoading ? (
          <LoadingAnimation />
        ) : (
          <p className="font-bold text-xl">Value: {valueContract}</p>
        )}
      </div>
    </div>
  );
}
