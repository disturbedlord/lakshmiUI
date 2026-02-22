import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Price = () => {
  return (
    <div className="max-w-md mx-auto mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Update Metal Prices
      </h2>

      {/* <!-- Gold 24K--> */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Gold 24K Price (₹ / gram)
        </label>
        <input
          type="number"
          step="0.01"
          placeholder="e.g. 6200.00"
          className="text-black w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
      </div>

      {/* <!-- Gold 22K--> */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Gold 22K Price (₹ / gram)
        </label>
        <input
          type="number"
          step="0.01"
          placeholder="e.g. 6200.00"
          className=" text-black w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
      </div>

      {/* <!-- Gold 18K--> */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Gold 18K Price (₹ / gram)
        </label>
        <input
          type="number"
          step="0.01"
          placeholder="e.g. 6200.00"
          className=" text-black w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
      </div>
      {/* <!--Silver--> */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Silver Price (₹ / gram)
        </label>
        <input
          type="number"
          step="0.01"
          placeholder="e.g. 6200.00"
          className="text-black w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
      </div>
      {/* <!--Platinum--> */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Platinum Price (₹ / gram)
        </label>
        <input
          type="number"
          step="0.01"
          placeholder="e.g. 6200.00"
          className="text-black w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
      </div>
      {/* <!--Diamond--> */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Diamond Price (₹ / gram)
        </label>
        <input
          type="number"
          step="0.01"
          placeholder="e.g. 6200.00"
          className="text-black w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
      </div>

      <button className="w-full rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-700 active:scale-[0.98]">
        Update Prices
      </button>
    </div>
  );
};

export default Price;
