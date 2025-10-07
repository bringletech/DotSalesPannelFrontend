import React, { useState } from "react";
import StatCard from "./StatCard";
import Modal from "../ui/Modal";
import List from "../ui/List";
import { cardsData } from "../../constants/constants";

// Dummy data to show in the list for all cards
const dummyListData = [
  { id: 1, name: "Alice", value: 100 },
  { id: 2, name: "Bob", value: 200 },
  { id: 3, name: "Charlie", value: 300 },
  { id: 4, name: "David", value: 400 },
];

function CardContainer() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleExport = () => {
    console.log(`Export CSV for: ${selectedCard.title}`);
    // Add your export logic here
    if (!selectedCard) return;

  const data = dummyListData; // replace with dynamic data if needed
  if (!data || data.length === 0) return;

  // Get headers from keys of first object
  const headers = Object.keys(data[0]);
  const csvRows = [];

  // Add header row
  csvRows.push(headers.join(","));

  // Add data rows
  data.forEach((row) => {
    const values = headers.map((header) => {
      const escaped = ("" + row[header]).replace(/"/g, '""'); // escape quotes
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  });

  // Create CSV string
  const csvString = csvRows.join("\n");

  // Create a blob and download
  const blob = new Blob([csvString], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", `${selectedCard.title}.csv`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  };

  return (
    <div>
      <div className="w-full flex flex-wrap gap-4">
        {cardsData.map((card, index) => (
          <StatCard
            key={index}
            title={card.title}
            icon={card.icon}
            value={card.value}
            onClick={() => handleCardClick(card)} // make card clickable
            className="cursor-pointer hover:shadow-lg transition"
          />
        ))}
      </div>

      {selectedCard && (
        <Modal
          isOpen={!!selectedCard}
          onClose={handleCloseModal}
          onExport={handleExport}
        >
          <h2 className="text-xl font-bold mb-4">{selectedCard.title} Details</h2>
          <List Data={dummyListData} />
        </Modal>
      )}
    </div>
  );
}

export default CardContainer;
