import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LeadDispositionCard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Disposition");

  const [leadDetails] = useState({
    companyName: "MOORE TRANSPORT COMPANY LLC",
    dotNumber: "4411174",
    leadType: "New",
    leadCategory: "...............",
    customerName: "Jhonathan Moore",
  });

  const [dispositionHistory] = useState([
    {
      dispositionedAs: "Voicemail",
      callDirection: "Outbound",
      callBackDate: "",
      timezone: "",
      dispositionedBy: "Rick Wood",
      contact: "123456789",
      lockInPeriodEndOn: "May 31, 2025",
    },
  ]);

  const [orderData] = useState([]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow">
      {/* Left Panel */}
      <div className="w-full md:w-1/3 rounded-2xl border-gray-900 p-4 bg-white border-radius-lg shadow-md">
        <div className="mb-4 font-sm text-lg">{leadDetails.companyName}</div>
        <div className="flex gap-2 mb-5">
          <button className="bg-green-100 px-4 py-1 mr-2 rounded text-green-600 text-sm">
            HM Log
          </button>
          <button className="bg-green-100 px-4 py-1 rounded text-green-600 text-sm">
            Lead Details
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">DOT Number</span>
            <span>{leadDetails.dotNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Lead Type</span>
            <span>{leadDetails.leadType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Lead Category</span>
            <span>{leadDetails.leadCategory}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Customer Name</span>
            <span>{leadDetails.customerName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Company Name</span>
            <span>{leadDetails.companyName}</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 rounded-2xl border-gray-900 border-radius-lg shadow-md p-4 bg-white">
        {/* Tab Headers */}
        <div className="flex gap-6 mb-1">
          {["Disposition", "Courses", "Orders"].map((tab) => (
            <span
              key={tab}
              className={`cursor-pointer font-medium px-2 pb-1 ${
                activeTab === tab
                  ? "text-black underline underline-offset-8 decoration-red-400"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Subheader */}
        <div className="mt-3 mb-3 flex justify-between items-center">
          <div className="text-gray-700 font-semibold">
            {activeTab === "Disposition" && "Disposition History"}
            {activeTab === "Courses" && "Purchase Courses"}
            {activeTab === "Orders" && "Orders"}
          </div>
          {activeTab === "Disposition" && (
            <button
              className="text-blue-600 text-sm px-2 py-1 rounded cursor-pointer hover:bg-blue-100"
              onClick={() => navigate("/adddispositionform")}
            >
              + Add Disposition
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div className="border rounded overflow-x-auto">
          {/* Disposition Tab */}
          {activeTab === "Disposition" && (
            <table className="min-w-full text-left text-sm p-4">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-2 font-semibold">Dispositioned As</th>
                  <th className="px-2 py-2 font-semibold">Call Direction</th>
                  <th className="px-2 py-2 font-semibold">Call back Date</th>
                  <th className="px-2 py-2 font-semibold">Timezone</th>
                  <th className="px-2 py-2 font-semibold">Dispositioned By</th>
                  <th className="px-2 py-2 font-semibold">Contact</th>
                  <th className="px-2 py-2 font-semibold">
                    Lock-in period End on
                  </th>
                </tr>
              </thead>
              <tbody>
                {dispositionHistory.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-2 py-4 text-center text-gray-500"
                    >
                      No disposition history available.
                    </td>
                  </tr>
                ) : (
                  dispositionHistory.map((item, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="px-2 py-4">
                        {item.dispositionedAs || "N/A"}
                      </td>
                      <td className="px-2 py-4">
                        {item.callDirection || "N/A"}
                      </td>
                      <td className="px-2 py-4">
                        {item.callBackDate || "............"}
                      </td>
                      <td className="px-2 py-4">
                        {item.timezone || "............"}
                      </td>
                      <td className="px-2 py-4">
                        {item.dispositionedBy || "N/A"}
                      </td>
                      <td className="px-2 py-4">{item.contact || "N/A"}</td>
                      <td className="px-2 py-4">
                        {item.lockInPeriodEndOn || "N/A"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}

          {/* Courses Tab */}
          {activeTab === "Courses" && (
            <div className="p-4">
              <table className="min-w-full text-left text-sm border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Title</th>
                    <th className="px-4 py-2 font-semibold">Price</th>
                    <th className="px-4 py-2 font-semibold text-center">
                      Add To Cart
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      title: "Process Safety Management (PSM)",
                      price: "$19.00",
                    },
                    {
                      title: "Process Safety Management (PSM)",
                      price: "$19.00",
                    },
                    {
                      title: "Process Safety Management (PSM)",
                      price: "$19.00",
                    },
                  ].map((course, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-2">{course.title}</td>
                      <td className="px-4 py-2">{course.price}</td>
                      <td className="px-4 py-2 text-center">
                        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                          Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Orders Tab */}
          {/* Orders Tab */}
          {activeTab === "Orders" && (
            <div className="p-4">
              {/* Header section with Add button */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-gray-800 font-semibold"> CompanyOrders</h3>
                <button
                  className="text-blue-600 text-sm px-2 py-1 rounded hover:bg-blue-100"
                  onClick={() => navigate("/adddispositionform")}
                >
                  + Add Disposition
                </button>
              </div>

              {/* Orders Table */}
              <table className="min-w-full text-left text-sm border rounded">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-2 py-2 font-semibold">Courses</th>
                    <th className="px-2 py-2 font-semibold">No of license</th>
                    <th className="px-2 py-2 font-semibold">Older amt.</th>
                    <th className="px-2 py-2 font-semibold">Source</th>
                    <th className="px-2 py-2 font-semibold">Source Name</th>
                    <th className="px-2 py-2 font-semibold">Completed</th>
                    <th className="px-2 py-2 font-semibold">Discount</th>
                    <th className="px-2 py-2 font-semibold">purchase Date</th>
                    <th className="px-2 py-2 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.length === 0 ? (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-2 py-4 text-center text-gray-500"
                      >
                        No orders found.
                      </td>
                    </tr>
                  ) : (
                    orderData.map((order, idx) => (
                      <tr key={idx} className="border-t hover:bg-gray-50">
                        <td className="px-2 py-2">{order.id}</td>
                        <td className="px-2 py-2">{order.item}</td>
                        <td className="px-2 py-2">{order.date}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadDispositionCard;
