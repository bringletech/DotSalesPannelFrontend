import { useState, useEffect } from "react";
import Layout from "./components/ui/Layout";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AgentDashboard from "./pages/AgentDashboard";
import AgaintCampaign from "./pages/AgentCampaign";
import CouponCode from "./pages/CouponCode";
import CourseList from "./pages/CourseList";
// import EmailCampaign from "./pages/EmailCampaign";
import MyAttendance from "./pages/MyAttendance";
import MyDispositions from "./pages/MyDispositions";
import Sales from "./pages/Sales";
import LeadDispositionCard from "./components/leaddisposition/LeadDispositionCard";
import AddDispositionForm from "./components/addPosition/AddDispositionForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  console.log("isauth?: ", isAuthenticated);
  return (
    <>
      <BrowserRouter>
        {isAuthenticated && <Layout />}

        <div
          className={`${
            isAuthenticated
              ? "absolute w-[82%] bg-white text-black top-[80px] left-[18%] pr-13 pl-5 pt-5 h-[calc(100vh-80px)] pb-10 overflow-y-auto  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : ""
          }`}
        >
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/agent-dashboard" replace />}
            />

            <Route path="/agent-dashboard" element={<AgentDashboard />} />
            <Route path="/againt-campaign" element={<AgaintCampaign />} />
            <Route path="/my-disposition" element={<MyDispositions />} />
            {/* <Route path="/emailcampaign" element={<EmailCampaign />} /> */}
            <Route path="/courselist" element={<CourseList />} />
            <Route path="/couponcode" element={<CouponCode />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/leaddisposition" element={<LeadDispositionCard />} />
            <Route
              path="/adddispositionform"
              element={<AddDispositionForm />}
            />
            {/* <Route path="/attendance" element={<MyAttendance />} />
            <Route path="/lead-details" element={<LeadDetails />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
