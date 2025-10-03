import React, { useState } from "react";

function ReportFilterForm() {
  const [formData, setFormData] = useState({
    course: "",
    dateRange: "",
    timeZone: "",
    carrierOps: "",
    callType: "",
    dispositionStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClear = () => {
    setFormData({
      course: "",
      dateRange: "",
      timeZone: "",
      carrierOps: "",
      callType: "",
      dispositionStatus: "",
    });
  };

  const handleFilter = () => {
    console.log("Filter data:", formData);
  };

  return (
    <form className="w-full  p-4 rounded-lg space-y-4">
      {/* First Row: 4 fields */}
      <div className="grid grid-cols-4 gap-4">
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="h-8 px-2 border rounded"
        >
          <option value="">Select Course</option>
          <option value="Course 1">Course 1</option>
          <option value="Course 2">Course 2</option>
          <option value="Course 3">Course 3</option>
        </select>

        <input
          type="text"
          name="dateRange"
          value={formData.dateRange}
          onChange={handleChange}
          placeholder="Select Date Range"
          className="h-8 px-2 border rounded"
        />

        <select
          name="timeZone"
          value={formData.timeZone}
          onChange={handleChange}
          className="h-8 px-2 border rounded"
        >
          <option value="">Eastern ET</option>
          <option value="ET">ET</option>
          <option value="EST">EST</option>
          <option value="EDT">EDT</option>
        </select>

        <select
          name="carrierOps"
          value={formData.carrierOps}
          onChange={handleChange}
          className="h-8 px-2 border rounded"
        >
          <option value="">Select Carrier Operations</option>
          <option value="Ops 1">Ops 1</option>
          <option value="Ops 2">Ops 2</option>
          <option value="Ops 3">Ops 3</option>
        </select>
      </div>

      {/* Second Row: Call Type, Disposition Status, Buttons */}
      <div className="flex items-center gap-4">
        <select
          name="callType"
          value={formData.callType}
          onChange={handleChange}
          className="h-8 px-2 border rounded"
        >
          <option value="">Select Call Type</option>
          <option value="Inbound">Inbound</option>
          <option value="Outbound">Outbound</option>
        </select>

        <select
          name="dispositionStatus"
          value={formData.dispositionStatus}
          onChange={handleChange}
          className="h-8 px-2 border rounded"
        >
          <option value="">Select Disposition Status</option>
          <option value="Interested">Interested</option>
          <option value="Not Interested">Not Interested</option>
          <option value="Follow-up">Follow-up</option>
        </select>

        <button
          type="button"
          onClick={handleClear}
          className="px-3 py-1 bg-white border border-gray-500 text-black rounded hover:bg-red-700 hover:text-white"
        >
          Clear
        </button>

        <button
          type="button"
          onClick={handleFilter}
          className="px-3 py-1 bg-white border border-gray-500  text-black rounded hover:bg-red-700 hover:text-white"
        >
          Filter
        </button>
      </div>
    </form>
  );
}

export default ReportFilterForm;
