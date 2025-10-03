import React, { useState } from "react";

function CourseFilterForm() {
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleClear = () => {
    setSelectedCourse("");
  };

  const handleFilter = () => {
    console.log("Filtering for course:", selectedCourse);
    // Add actual filter logic here
  };

  return (
    <form className="w-full  p-4 border border-gray-300 rounded-lg bg-white flex flex-col justify-between">
      {/* Title */}
      <h2 className="text-left text-lg font-semibold mb-3">Search</h2>

      {/* Select input */}
      <select
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
        className="w-full h-10 px-3 border border-gray-300 rounded mb-6"
      >
        <option value="">Select Course</option>
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
        <option value="MERN Stack">MERN Stack</option>
        <option value="JavaScript">JavaScript</option>
      </select>

      {/* Buttons at bottom-right */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={handleClear}
          className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-100"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={handleFilter}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Filter
        </button>
      </div>
    </form>
  );
}

export default CourseFilterForm;
