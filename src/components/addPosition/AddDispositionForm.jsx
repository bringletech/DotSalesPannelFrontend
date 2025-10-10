import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDispositionForm = () => {
  const [show, setShow] = useState(true);
  const [form, setForm] = useState({
    callType: "",
    dispositionStatus: "",
    phoneNumber: "",
    email: "",
    course: "",
    notes: "",
  });
  const navigate = useNavigate();
  // Example options
  const callTypeOptions = ["Inbound", "Outbound"];
  const dispositionStatusOptions = ["Connected", "Voicemail", "No Answer"];
  const phoneOptions = ["1234567890", "9876543210"];
  const courseOptions = ["Math", "Physics", "Chemistry"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Submit logic here (API call, update parent, etc)
    console.log(form);
  };

  const handleClose = () => {
    setShow(false);
    navigate("/leaddisposition");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-30">
      <div className="relative max-w-4xl w-full mx-auto p-4 bg-white rounded-lg shadow-md">
        {/* Cross button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
          onClick={handleClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Add Disposition</h2>
        <form onSubmit={handleSave}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Call Type */}
            <div>
              <select
                name="callType"
                value={form.callType}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none"
              >
                <option value="">Select Call Type</option>
                {callTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            {/* Disposition Status */}
            <div>
              <select
                name="dispositionStatus"
                value={form.dispositionStatus}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none"
              >
                <option value="">Select Disposition Status</option>
                {dispositionStatusOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            {/* Phone Number */}
            <div>
              <select
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none"
              >
                <option value="">Phone Number</option>
                {phoneOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Add Email"
                className="w-full border rounded px-3 py-2 focus:outline-none"
              />
            </div>
            {/* Course */}
            <div>
              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none"
              >
                <option value="">Select Course</option>
                {courseOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Notes/Comments */}
          <div className="mb-6">
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Notes/Comments"
              rows={4}
              className="w-full border rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-8 py-2 rounded"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDispositionForm;
