import React, { useState } from "react";

function EmailCampaign() {
  const [formData, setFormData] = useState({
    emailService: "netcore - iccouncil0.org",
    status: "Opened",
    dateRange: "2025-05-19 to 2025-05-20",
  });

  const handleClear = () => {
    setFormData({
      emailService: "",
      status: "",
      dateRange: "",
    });
  };

  const handleFilter = () => {
    alert("Filter applied!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Search</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Email Service */}
          <select
            value={formData.emailService}
            onChange={(e) =>
              setFormData({ ...formData, emailService: e.target.value })
            }
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select Service</option>
            <option value="netcore - iccouncil0.org">
              netcore - iccouncil0.org
            </option>
          </select>

          {/* Status */}
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select Status</option>
            <option value="Opened">Opened</option>
            <option value="Clicked">Clicked</option>
            <option value="Bounced">Bounced</option>
          </select>

          {/* Date Range */}
          <input
            type="text"
            value={formData.dateRange}
            onChange={(e) =>
              setFormData({ ...formData, dateRange: e.target.value })
            }
            placeholder="dd/mm/yyyy - dd/mm/yyyy"
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-blue-200"
          />

          {/* Buttons */}
          <div className="flex space-x-2 justify-end">
            <button
              onClick={handleClear}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition"
            >
              Clear
            </button>
            <button
              onClick={handleFilter}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Email Campaign Table */}
      <div className="bg-white shadow rounded-lg mt-6 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Email Campaign
          </h2>
          <span className="text-gray-600 text-sm font-medium">
            Total Counts: <span className="text-black">0/0</span>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-2 px-4 border-b">Event</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Subject</th>
                <th className="py-2 px-4 border-b">From</th>
                <th className="py-2 px-4 border-b">To</th>
                <th className="py-2 px-4 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-4 text-gray-500 border-b"
                >
                  No Data Found !
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmailCampaign;
