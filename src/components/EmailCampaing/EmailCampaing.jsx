import React, { useState } from "react";
import { FiCalendar } from "react-icons/fi";

function EmailCampaign() {
  const [formData, setFormData] = useState({
    emailService: "netcore - iccouncil0.org",
    status: "Opened",
    dateRange: "2025-05-19 to 2025-05-20",
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [fromDate, setFromDate] = useState("2025-05-19");
  const [toDate, setToDate] = useState("2025-05-20");

  const handleClear = () => {
    setFormData({
      emailService: "",
      status: "",
      dateRange: "",
    });
    setFromDate("");
    setToDate("");
  };

  const handleFilter = () => {
    // alert("Filter applied!");
  };

  const handleDateChange = () => {
    setFormData({
      ...formData,
      dateRange: `${fromDate} to ${toDate}`,
    });
    setShowCalendar(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Search</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative">
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

          {/* Date Range with Dropdown Arrow */}
          <div className="relative w-full">
            <input
              type="text"
              readOnly
              value={formData.dateRange}
              onClick={() => setShowCalendar(!showCalendar)}
              placeholder="dd/mm/yyyy - dd/mm/yyyy"
              className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring focus:ring-blue-200 cursor-pointer"
            />
            <FiCalendar className="absolute right-3 top-2.5 text-gray-500 pointer-events-none" />

            {showCalendar && (
              <div className="absolute z-10 bg-white border rounded-md p-4 mt-1 shadow-lg">
                <div className="flex gap-2">
                  <div>
                    <label className="text-sm text-gray-600">From</label>
                    <input
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="border rounded p-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">To</label>
                    <input
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="border rounded p-1"
                    />
                  </div>
                </div>
                <button
                  onClick={handleDateChange}
                  className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                >
                  Apply
                </button>
              </div>
            )}
          </div>

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
    </div>
  );
}

export default EmailCampaign;
