import React from "react";
import List from "../components/ui/List";
import FormContainer from "../components/ui/FormContainer";
import TitleBar from "../components/ui/TitleBar";
import useAllCourse from "../api/useAllCourse"; // 👈 import your custom hook

function CourseList() {
  const { data, loading, error, refetch } = useAllCourse(); // 👈 get API data

  return (
    <>
      <TitleBar title={"Course List"} />

      <div className="mt-5">
        <FormContainer title={"Courses"}>
          {/* Loading state */}
          {loading && <p className="text-gray-500">Loading courses...</p>}

          {/* Error state */}
          {error && (
            <p className="text-red-500">Error fetching courses: {error}</p>
          )}

          {/* Success state */}
          {!loading && !error && data.length > 0 && <List Data={data} />}

          {/* Empty state */}
          {!loading && !error && data.length === 0 && (
            <p className="text-gray-400">No courses found.</p>
          )}
        </FormContainer>
      </div>
    </>
  );
}

export default CourseList;
