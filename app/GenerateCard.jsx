import React from "react";

function GenerateCard(
{  benefitName,
  isAvailable,
  type,
  availableBalance,
  benefitLimit,
  visitLimit,
  reservedAmount,
  copayAmount,
  copayType,
  copayAppliesTo}
) {
  return (
    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
      <div className="text-3xl font-medium text-green-300 truncate">
        {benefitName}
      </div>
      <span
        className={`inline-flex items-center bg-${
          isAvailable ? "green" : "red"
        }-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300`}
      >
        <span
          className={`w-2 h-2 mr-1 bg-${
            isAvailable ? "green" : "red"
          }-500 rounded-full`}
        ></span>
        {isAvailable ? "Available" : "Unavailable"}
      </span>
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
        <div className="flex">
          <div className="mt-1 text-md font-semibold text-gray-500">Type:</div>
          <div className="mt-1 text-md font-semibold text-gray-800">{type}</div>
        </div>
        <div className="flex">
          <div className="mt-1 text-md font-semibold text-gray-500">
            Available Balance:
          </div>
          <div className="mt-1 text-md font-semibold text-gray-800">
            {availableBalance}
          </div>
        </div>
        <div className="flex">
          <div className="mt-1 text-md font-semibold text-gray-500">
            Benefit Limit:
          </div>
          <div className="mt-1 text-md font-semibold text-gray-800">
            {benefitLimit}
          </div>
        </div>
        <div className="flex">
          <div className="mt-1 text-md font-semibold text-gray-500">
            Visit Limit:
          </div>
          <div className="mt-1 text-md font-semibold text-gray-800">
            {visitLimit}
          </div>
        </div>
        <div className="flex">
          <div className="mt-1 text-md font-semibold text-gray-500">
            Reserved Amount:
          </div>
          <div className="mt-1 text-md font-semibold text-gray-800">
            {reservedAmount}
          </div>
        </div>
        {copayAmount && copayType && copayAppliesTo && (
          <div className="group relative">
            <button className="rounded bg-blue-500 hover:bg-blue-800 px-10 py-3 text-md text-white shadow-sm">
              CoPay
            </button>
            <div className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-sm text-white group-hover:scale-100">
              <p>Amount: {copayAmount}</p>
              <p>Type: {copayType}</p>
              <p>Applies to: {copayAppliesTo}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenerateCard;
