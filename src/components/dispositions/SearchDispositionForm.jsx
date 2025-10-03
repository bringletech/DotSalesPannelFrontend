import React, { useState } from "react";

function SearchDispositionForm() {
  const [formData, setFormData] = useState({
    dotNumber: "",
    mcMxFfNumber: "",
    ownerName: "",
    companyName: "",
    email: "",
    phone1: "",
    phone2: "",
    callDirection: "",
    dispositionStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // page reload stop
    console.log("Form Data:", formData);
    // yahan backend ko bhej sakta hai filter data
  };

  const handleClear = () => {
    setFormData({
      dotNumber: "",
      mcMxFfNumber: "",
      ownerName: "",
      companyName: "",
      email: "",
      phone1: "",
      phone2: "",
      callDirection: "",
      dispositionStatus: "",
    });
  };

  return (
    <form className="w-full p-4" onSubmit={handleSubmit}>
      {/* First row of 4 fields */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <input
          type="text"
          name="dotNumber"
          value={formData.dotNumber}
          onChange={handleChange}
          placeholder="Dot number"
          className="border px-3 py-2 rounded-md w-[200px]"
        />
        <input
          type="text"
          name="mcMxFfNumber"
          value={formData.mcMxFfNumber}
          onChange={handleChange}
          placeholder="MC/MX/FF number"
          className="border px-3 py-2 rounded-md w-[200px]"
        />
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          placeholder="Owner name"
          className="border px-3 py-2 rounded-md w-[200px]"
        />
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company name"
          className="border px-3 py-2 rounded-md w-[200px]"
        />
      </div>

      {/* Second row of 3 fields (last one col-span-2) */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border px-3 py-2 rounded-md w-[200px]"
        />
        <input
          type="text"
          name="phone1"
          value={formData.phone1}
          onChange={handleChange}
          placeholder="Phone number"
          className="border px-3 py-2 rounded-md w-[200px]"
        />
        <input
          type="text"
          name="phone2"
          value={formData.phone2}
          onChange={handleChange}
          placeholder="Phone number"
          className="border px-3 py-2 rounded-md col-span-2 w-full"
        />
      </div>

      {/* Advance filter section */}
      <div className="mb-4">
        <h3 className="font-bold mb-2">Advance Filter</h3>
        <div className="grid grid-cols-2 gap-4 w-1/2">
          <div>
            <label className="block text-sm mb-1">Call Direction</label>
            <select
              name="callDirection"
              value={formData.callDirection}
              onChange={handleChange}
              className="border px-3 py-2 rounded-md w-full"
            >
              <option value="">Select call type</option>
              <option value="Inbound">Inbound</option>
              <option value="Outbound">Outbound</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Disposition Status</label>
            <select
              name="dispositionStatus"
              value={formData.dispositionStatus}
              onChange={handleChange}
              className="border px-3 py-2 rounded-md w-full"
            >
              <option value="">Select state</option>
              <option value="Old">Old</option>
              <option value="New">New</option>
              <option value="Updated">Updated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Buttons bottom-right */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-white border rounded-md hover:bg-red-500 hover:text-white"
        >
          Clear
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-white border rounded-md hover:bg-red-500 hover:text-white"
        >
          Filter
        </button>
      </div>
    </form>
  );
}

export default SearchDispositionForm;
