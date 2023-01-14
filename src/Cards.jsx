import { useState } from "react";
import "./App.css";
import { DiHtml5 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

const cards = [
  {
    id: 1,
    name: "HTML",
    description: "Markup language for documents.",
    primaryColor: "#7b68ee",
    secondaryColor: "#F7F5FE",
    icon: <DiHtml5 />,
  },
  {
    id: 2,
    name: "React",
    description: "JavaScript library.",
    primaryColor: "#7b68ee",
    secondaryColor: "#F7F5FE",
    icon: <DiReact />,
  },
  {
    id: 3,
    name: "CSS",
    description: "Style sheet language.",
    primaryColor: "#7b68ee",
    secondaryColor: "#F7F5FE",
    icon: <DiCss3 />,
  },
  {
    id: 4,
    name: "JavaScript",
    description: "Programming language.",
    primaryColor: "#7b68ee",
    secondaryColor: "#F7F5FE",
    icon: <DiJavascript />,
  },
  {
    id: 5,
    name: "Next JS",
    description: "Framework for React apps.",
    primaryColor: "#7b68ee",
    secondaryColor: "#F7F5FE",
    icon: <SiNextdotjs />,
  },
];
const renderCards = () => {
  return cards.map((card) => {
    const newId = `card_${card.id}`;

    return (
      <div key={card.id} id={newId} className="card">
        {/* <img src={card.src} alt="" srcset="" /> */}

        {card.icon}
        <b>{card.name}</b>
        <p>{card.description}</p>
      </div>
    );
  });
};

function Cards() {
  return <div className="cards">{renderCards()}</div>;
}

export default Cards;
