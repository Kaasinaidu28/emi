import React from "react";

export default function Balance({ balance }) {
  return (
    <div className="text-center mb-4">
      <p className="text-lg font-semibold">Current Balance</p>
      <p className="text-2xl font-bold text-blue-600">₹ {balance.toFixed(2)}</p>
    </div>
  );
}
