import React, { useState } from "react";

const RecordDetailModal = ({ record, onClose }) => {
  if (!record) return null;
  const formatKey = (key) => {
    return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Record Details: {record.legal_name || `DOT# ${record.dot_number}`}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-3xl font-bold"
          >
            &times;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {Object.entries(record).map(([key, value]) => (
            <div key={key} className="border-b border-gray-100 py-2">
              <p className="text-xs font-semibold text-gray-500 uppercase">
                {formatKey(key)}
              </p>
              <p className="text-gray-800 font-medium">
                {value || "-"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AgainstCampaign = () => {
  const [limit, setLimit] = useState('1000');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [dotNumber, setDotNumber] = useState("");
  const [mcNumber, setMcNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [operatingStart, setOperatingStart] = useState("");
  const [operatingEnd, setOperatingEnd] = useState("");
  const [powerStart, setPowerStart] = useState("");
  const [powerEnd, setPowerEnd] = useState("");
  const [driversStart, setDriversStart] = useState("");
  const [driversEnd, setDriversEnd] = useState("");
  const [cdlStart, setCdlStart] = useState("");
  const [cdlEnd, setCdlEnd] = useState("");
  const [operatingStatus, setOperatingStatus] = useState("");
  const [state, setState] = useState("");
  const [carrierOperations, setCarrierOperations] = useState("");
  const [entityType, setEntityType] = useState("");
  const [cargoCarried, setCargoCarried] = useState("");
  const [businessOrg, setBusinessOrg] = useState("");
  const [mcs150DateFrom, setMcs150DateFrom] = useState("");
  const [mcs150DateTo, setMcs150DateTo] = useState("");
  const [addDateFrom, setAddDateFrom] = useState("");
  const [addDateTo, setAddDateTo] = useState("");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const usStates = [
    { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" },
    { code: "AZ", name: "Arizona" }, { code: "AR", name: "Arkansas" },
    { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" },
    { code: "DC", name: "District of Columbia" }, { code: "FL", name: "Florida" },
    { code: "GA", name: "Georgia" }, { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" }, { code: "IL", name: "Illinois" },
    { code: "IN", name: "Indiana" }, { code: "IA", name: "Iowa" },
    { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" }, { code: "ME", name: "Maine" },
    { code: "MD", name: "Maryland" }, { code: "MA", name: "Massachusetts" },
    { code: "MI", name: "Michigan" }, { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" }, { code: "MO", name: "Missouri" },
    { code: "MT", name: "Montana" }, { code: "NE", name: "Nebraska" },
    { code: "NV", name: "Nevada" }, { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" }, { code: "NM", name: "New Mexico" },
    { code: "NY", name: "New York" }, { code: "NC", name: "North Carolina" },
    { code: "ND", name: "North Dakota" }, { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" }, { code: "OR", name: "Oregon" },
    { code: "PA", name: "Pennsylvania" }, { code: "RI", name: "Rhode Island" },
    { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" }, { code: "TX", name: "Texas" },
    { code: "UT", name: "Utah" }, { code: "VT", name: "Vermont" },
    { code: "VA", name: "Virginia" }, { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" }, { code: "WI", name: "Wisconsin" },
    { code: "WY", name: "Wyoming" }
  ];


  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setRecords([]);

    try {
      const params = new URLSearchParams();
      params.append('$limit', limit);

      const whereConditions = [];

      if (operatingStatus) whereConditions.push(`status_code = '${operatingStatus}'`);
      if (state) whereConditions.push(`phy_state = '${state}'`);
      if (carrierOperations) whereConditions.push(`carrier_operation = '${carrierOperations}'`);
      if (businessOrg) whereConditions.push(`business_org_id = '${businessOrg}'`);
      if (entityType) whereConditions.push(`carship like '%${entityType}%'`);
      if (phoneNumber) whereConditions.push(`phone like '%${phoneNumber}%'`);
      if (email) whereConditions.push(`lower(email_address) like lower('%${email}%')`);
      if (companyName) whereConditions.push(`(lower(legal_name) like lower('%${companyName}%') OR lower(dba_name) like lower('%${companyName}%'))`);
      if (ownerName) whereConditions.push(`(lower(company_officer_1) like lower('%${ownerName}%') OR lower(company_officer_2) like lower('%${ownerName}%'))`);
      if (mcNumber) whereConditions.push(`(docket1 like '%${mcNumber}%' OR docket2 like '%${mcNumber}%' OR docket3 like '%${mcNumber}%')`);
      if (operatingStart) whereConditions.push(`add_date >= '${operatingStart}-01-01'`);
      if (operatingEnd) whereConditions.push(`add_date <= '${operatingEnd}-12-31'`);
      if (mcs150DateFrom) whereConditions.push(`mcs150_date >= '${mcs150DateFrom}T00:00:00'`);
      if (mcs150DateTo) whereConditions.push(`mcs150_date <= '${mcs150DateTo}T23:59:59'`);
      if (addDateFrom) whereConditions.push(`add_date >= '${addDateFrom}'`);
      if (addDateTo) whereConditions.push(`add_date <= '${addDateTo}'`);
      if (dotNumber) whereConditions.push(`dot_number::text LIKE '%${dotNumber}%'`);
      if (powerStart) whereConditions.push(`power_units::number >= ${powerStart}`);
      if (powerEnd) whereConditions.push(`power_units::number <= ${powerEnd}`);
      if (driversStart) whereConditions.push(`total_drivers::number >= ${driversStart}`);
      if (driversEnd) whereConditions.push(`total_drivers::number <= ${driversEnd}`);
      if (cdlStart) whereConditions.push(`total_cdl::number >= ${cdlStart}`);
      if (cdlEnd) whereConditions.push(`total_cdl::number <= ${cdlEnd}`);

      const cargoMap = {
        general: 'crgo_genfreight', household: 'crgo_household', metal: 'crgo_metalsheet',
        vehicles: 'crgo_motoveh', produce: 'crgo_produce', liquids: 'crgo_liqgas',
        passengers: 'crgo_passengers', livestock: 'crgo_livestock', refrigerated: 'crgo_coldfood'
      };
      if (cargoCarried && cargoMap[cargoCarried]) {
        whereConditions.push(`${cargoMap[cargoCarried]} = 'X'`);
      }

      if (whereConditions.length > 0) {
        params.append('$where', whereConditions.join(' AND '));
      }

      const apiUrl = `https://data.transportation.gov/resource/az4n-8mr2.json?${params.toString()}`;
      console.log("Fetching URL:", apiUrl);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const result = await response.json();
      setRecords(result);

    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setDotNumber("");
    setMcNumber("");
    setOwnerName("");
    setCompanyName("");
    setEmail("");
    setPhoneNumber("");
    setOperatingStart("");
    setOperatingEnd("");
    setPowerStart("");
    setPowerEnd("");
    setDriversStart("");
    setDriversEnd("");
    setCdlStart("");
    setCdlEnd("");
    setOperatingStatus("");
    setState("");
    setCarrierOperations("");
    setEntityType("");
    setCargoCarried("");
    setBusinessOrg("");
    setMcs150DateFrom("");
    setMcs150DateTo("");
    setAddDateFrom("");
    setAddDateTo("");
    setRecords([]);
    setError(null);
  };

  const handleApplyFilter = () => {
    fetchData();
  };

  const handleRecordClick = (record) => {
    setSelectedRecord(record);
  };

  const closeModal = () => {
    setSelectedRecord(null);
  };


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-2xl font-bold text-gray-800">
            FMCSA Carrier Filter System
          </h2>
          <div className="text-sm text-gray-600">
            {loading ? (
              <span className="text-blue-600">Loading...</span>
            ) : (
              <span>Records Found: <span className="font-bold">{records.length}</span></span>
            )}
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-2 rounded mb-4">
            Error: {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="DOT Number"
            value={dotNumber}
            onChange={(e) => setDotNumber(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="MC/MX/FF Number"
            value={mcNumber}
            onChange={(e) => setMcNumber(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Officer/Owner Name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Legal/DBA Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Range Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1 text-sm">
                Operating Since (Year)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="From"
                  value={operatingStart}
                  onChange={(e) => setOperatingStart(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="number"
                  placeholder="To"
                  value={operatingEnd}
                  onChange={(e) => setOperatingEnd(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-1 text-sm">
                Power Units
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={powerStart}
                  onChange={(e) => setPowerStart(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={powerEnd}
                  onChange={(e) => setPowerEnd(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-1 text-sm">
                Total Drivers
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={driversStart}
                  onChange={(e) => setDriversStart(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={driversEnd}
                  onChange={(e) => setDriversEnd(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-1 text-sm">
                CDL Drivers
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={cdlStart}
                  onChange={(e) => setCdlStart(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={cdlEnd}
                  onChange={(e) => setCdlEnd(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={operatingStatus}
            onChange={(e) => setOperatingStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="A">Active</option>
            <option value="I">Inactive</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">All States</option>
            {usStates.map(s => (
              <option key={s.code} value={s.code}>
                {s.name}
              </option>
            ))}
          </select>

          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={carrierOperations}
            onChange={(e) => setCarrierOperations(e.target.value)}
          >
            <option value="">All Operations</option>
            <option value="A">Interstate</option>
            <option value="B">Intrastate Hazmat</option>
            <option value="C">Intrastate Non-Hazmat</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={entityType}
            onChange={(e) => setEntityType(e.target.value)}
          >
            <option value="">All Entity Types</option>
            <option value="C">Carrier</option>
            <option value="S">Shipper</option>
            <option value="B">Broker</option>
            <option value="F">Freight Forwarder</option>
            <option value="R">Registrant</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={businessOrg}
            onChange={(e) => setBusinessOrg(e.target.value)}
          >
            <option value="">All Business Types</option>
            <option value="1">Individual</option>
            <option value="2">Partnership</option>
            <option value="3">Corporation</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            value={cargoCarried}
            onChange={(e) => setCargoCarried(e.target.value)}
          >
            <option value="">All Cargo Types</option>
            <option value="general">General Freight</option>
            <option value="household">Household Goods</option>
            <option value="metal">Metal Sheets/Coils</option>
            <option value="vehicles">Motor Vehicles</option>
            <option value="produce">Fresh Produce</option>
            <option value="liquids">Liquids/Gases</option>
            <option value="passengers">Passengers</option>
            <option value="livestock">Livestock</option>
            <option value="refrigerated">Refrigerated Food</option>
          </select>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Date Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1 text-sm">
                MCS-150 Form Date
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={mcs150DateFrom}
                  onChange={(e) => setMcs150DateFrom(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="date"
                  value={mcs150DateTo}
                  onChange={(e) => setMcs150DateTo(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-1 text-sm">
                Date Added to System
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  value={addDateFrom}
                  onChange={(e) => setAddDateFrom(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="date"
                  value={addDateTo}
                  onChange={(e) => setAddDateTo(e.target.value)}
                  className="w-1/2 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-2">
            <label htmlFor="limit-select" className="text-sm font-medium text-gray-700">Records:</label>
            <select
              id="limit-select"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="100">100</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="5000">5000</option>
            </select>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={clearFilters}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition duration-200"
            >
              Clear Filters
            </button>
            <button
              onClick={handleApplyFilter}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg transition duration-200"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </div>

      {records.length > 0 && (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Search Results</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  <th className="px-4 py-3">DOT#</th>
                  <th className="px-4 py-3">Legal Name</th>
                  <th className="px-4 py-3">DBA Name</th>
                  <th className="px-4 py-3">State</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Power Units</th>
                  <th className="px-4 py-3">Drivers</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {records.slice(0, limit).map((item) => (
                  <tr
                    key={item.dot_number}
                    className="hover:bg-blue-50 cursor-pointer"
                    onClick={() => handleRecordClick(item)}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.dot_number}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.legal_name || '-'}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.dba_name || '-'}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.phy_state}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${item.status_code === 'A' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {item.status_code === 'A' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.power_units || '0'}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.total_drivers || '0'}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.phone || '-'}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.email_address || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {records.length > limit && (
            <div className="p-4 bg-gray-50 border-t text-center text-sm text-gray-600">
              Showing first {limit} results of {records.length} total records
            </div>
          )}
        </div>

      )}
      {selectedRecord && (
        <RecordDetailModal
          record={selectedRecord}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default AgainstCampaign;