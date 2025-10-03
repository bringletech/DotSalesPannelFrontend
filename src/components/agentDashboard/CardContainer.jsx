import React from "react";
import StatCard from "./StatCard";
import { cardsData } from "../../constants/constants";

function CardContainer() {
  return (
    <div className="w-full flex flex-wrap gap-4">
      {cardsData.map((card, index) => (
        <StatCard
          key={index}
          title={card.title}
          icon={card.icon}
          value={card.value}
        />
      ))}
    </div>
  );
}

export default CardContainer;
