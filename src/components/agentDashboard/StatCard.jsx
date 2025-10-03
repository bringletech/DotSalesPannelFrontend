import React from "react";

function StatCard({ title, icon: Icon, value }) {
  return (
    <div className="w-[32%] h-[100px] bg-white border border-gray-300 rounded-xl shadow-sm p-4 flex flex-col">
      {/* Title + Icon */}
      <div className="flex items-center gap-2">
        {Icon && <Icon className="text-lg text-gray-700" />}
        <h2 className="text-sm font-medium text-gray-800">{title}</h2>
      </div>

      {/* Digits in center */}
      <div className="flex-1 flex items-center justify-center">
        <span className="text-2xl font-bold text-red-600">{value}</span>
      </div>
    </div>
  );
}

export default StatCard;
