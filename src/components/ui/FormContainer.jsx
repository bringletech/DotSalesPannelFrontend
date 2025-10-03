import React from "react";

function FormContainer({ title, children }) {
  return (
    <div className="w-full border pb-5  border-gray-300 rounded-xl bg-white shadow-sm">
      {/* Title Section */}
      <div className="h-[50px] flex items-center px-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      {/* Divider Line */}
      <div className="border-t border-gray-300"></div>
      {/* Form Content */}
      <div className="p-4">{children}</div>
    </div>
  );
}

export default FormContainer;
