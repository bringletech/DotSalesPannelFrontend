import React, { useState } from "react";
import Papa from "papaparse";

function ReportFilterForm({ onCsvUpload }) {
  const [formData, setFormData] = useState({
    course: "",
    dateRange: "",
    timeZone: "",
    carrierOps: "",
    callType: "",
    dispositionStatus: "",
  });

  const [showModal, setShowModal] = useState(false);

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

  const sampleHeaders = [
    "agentName",
    "teamLeadName",
    "total",
    "old",
    "new",
    "updated",
    "connected",
    "hot",
    "warm",
    "sales",
    "revenue",
    "inbound",
    "outbound",
  ];

  const handleDownloadSample = () => {
    const csvContent = sampleHeaders.join(",") + "\n";
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sample.csv";
    link.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      alert("Only CSV files are allowed!");
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const headers = result.meta.fields;

        // Check if headers exactly match sampleHeaders
        const isValid =
          headers.length === sampleHeaders.length &&
          headers.every((h, i) => h.trim() === sampleHeaders[i]);

        if (!isValid) {
          alert("Invalid CSV format. Please use the sample file format.");
          return;
        }
       
        console.log("Parsed CSV Data:", result.data);
        onCsvUpload(result.data)
        setShowModal(false);
      },
    });
  };

  return (
    <div className="relative">
      {/* Form */}
      <form className="w-full p-4 rounded-lg space-y-4">
        {/* First Row */}
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

        {/* Second Row */}
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
            className="px-3 py-1 bg-white border border-gray-500 text-black rounded hover:bg-red-700 hover:text-white"
          >
            Filter
          </button>
        </div>
      </form>

      {/* Import CSV Button - Bottom Right */}
      <div className="absolute bottom-2 right-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Import CSV
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 relative">
            {/* Top-right: Download Sample */}
            <button
              onClick={handleDownloadSample}
              className="absolute top-2 right-3 text-white p-2 rounded text-sm bg-blue-600"
            >
              Download Sample CSV
            </button>

            <h2 className="text-lg font-semibold mb-4">Upload CSV File</h2>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="block w-full border border-gray-400 rounded p-2 mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReportFilterForm;
