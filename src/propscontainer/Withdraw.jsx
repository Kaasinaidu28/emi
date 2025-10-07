import React from "react";

export default function Withdraw({ transactions }) {
  if (transactions.length === 0)
    return <p className="text-center mt-4 text-gray-500">No transactions yet</p>;

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">📜 Transaction History</h2>
      <ul className="max-h-40 overflow-y-auto border rounded-lg p-2">
        {transactions.map((t, i) => (
          <li
            key={i}
            className={`flex justify-between p-1 ${
              t.type === "Deposit" ? "text-green-600" : "text-red-600"
            }`}
          >
            <span>{t.type}</span>
            <span>₹ {t.amount.toFixed(2)}</span>
            <span className="text-gray-500 text-sm">
              {new Date(t.date).toLocaleTimeString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
