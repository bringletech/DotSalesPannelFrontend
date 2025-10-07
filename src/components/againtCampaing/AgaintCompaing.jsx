import React, { useState } from "react";

const AgainstCampaign = () => {
  const [dotNumber, setDotNumber] = useState("");
  const [mcNumber, setMcNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [operatingSince, setOperatingSince] = useState(0);
  const [powerUnits, setPowerUnits] = useState(0);
  const [totalDrivers, setTotalDrivers] = useState(0);
  const [cdlDrivers, setCdlDrivers] = useState(0);
  const [operatingStatus, setOperatingStatus] = useState("ACTIVE");
  const [state, setState] = useState("");
  const [timezone, setTimezone] = useState("");
  const [carrierOperations, setCarrierOperations] = useState("");
  const [leadCategory, setLeadCategory] = useState("");
  const [leadType, setLeadType] = useState("NEW");
  const [addedDate, setAddedDate] = useState("");
  const [entityType, setEntityType] = useState("");
  const [cargoCarried, setCargoCarried] = useState("");
  const [sortBy, setSortBy] = useState("Viewed At");
  const [moreFilter, setMoreFilter] = useState("");
  const [dotAddDate, setDotAddDate] = useState("");
  const [mcsFormDate, setMcsFormDate] = useState("");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Against Campaign Filters
        </h2>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            placeholder="DOT Number"
            value={dotNumber}
            onChange={(e) => setDotNumber(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            placeholder="MC/MX/FF Number"
            value={mcNumber}
            onChange={(e) => setMcNumber(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            placeholder="Owner Name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {/* Range Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-600 mb-1 text-sm">
              Operating Since: {operatingSince} years
            </label>
            <input
              type="range"
              min={0}
              max={50}
              value={operatingSince}
              onChange={(e) => setOperatingSince(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-sm">
              Power Units: {powerUnits}
            </label>
            <input
              type="range"
              min={0}
              max={50}
              value={powerUnits}
              onChange={(e) => setPowerUnits(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-sm">
              Total Drivers: {totalDrivers}
            </label>
            <input
              type="range"
              min={0}
              max={50}
              value={totalDrivers}
              onChange={(e) => setTotalDrivers(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-sm">
              CDL Drivers: {cdlDrivers}
            </label>
            <input
              type="range"
              min={0}
              max={50}
              value={cdlDrivers}
              onChange={(e) => setCdlDrivers(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>
        </div>

        {/* Dropdown Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            value={operatingStatus}
            onChange={(e) => setOperatingStatus(e.target.value)}
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Select State</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <option value="NY">New York</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            <option value="">Select Timezone</option>
            <option value="PST">PST</option>
            <option value="CST">CST</option>
            <option value="EST">EST</option>
          </select>

          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            placeholder="Carrier Operations"
            value={carrierOperations}
            onChange={(e) => setCarrierOperations(e.target.value)}
          />
        </div>

        {/* Lead Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            value={leadCategory}
            onChange={(e) => setLeadCategory(e.target.value)}
          >
            <option value="">Select Lead Category</option>
            <option value="Hot">Hot</option>
            <option value="Warm">Warm</option>
            <option value="Cold">Cold</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            value={leadType}
            onChange={(e) => setLeadType(e.target.value)}
          >
            <option value="NEW">NEW</option>
            <option value="OLD">OLD</option>
          </select>

          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            placeholder="Added Date (MM/YYYY)"
            value={addedDate}
            onChange={(e) => setAddedDate(e.target.value)}
          />
        </div>

        {/* More Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            value={entityType}
            onChange={(e) => setEntityType(e.target.value)}
          >
            <option value="">Select Entity Type</option>
            <option value="LLC">LLC</option>
            <option value="CORP">Corporation</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            value={cargoCarried}
            onChange={(e) => setCargoCarried(e.target.value)}
          >
            <option value="">Select Cargo Type</option>
            <option value="General Freight">General Freight</option>
            <option value="Refrigerated">Refrigerated</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Viewed At">Viewed At</option>
            <option value="Added At">Added At</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            value={moreFilter}
            onChange={(e) => setMoreFilter(e.target.value)}
          >
            <option value="">Select a Filter</option>
            <option value="Top Leads">Top Leads</option>
          </select>
        </div>

        {/* Date Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            placeholder="DOT Added Date (MM/YYYY)"
            value={dotAddDate}
            onChange={(e) => setDotAddDate(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-100 outline-none"
            placeholder="MCS Form Date (MM/YYYY)"
            value={mcsFormDate}
            onChange={(e) => setMcsFormDate(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg transition">
            Clear
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgainstCampaign;
