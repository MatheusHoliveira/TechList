import { useEffect, useState } from "react";
import { DiHtml5 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

import Card from "../../../components/Card";
import "./App.css";

function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = [
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
    setData(newData);
  }, []);
  const handleClick = (id) => {};

  const renderTechs = () => {
    return data.map((item) => {
      <Card
        id={item.id}
        name={item.name}
        description={item.description}
        primaryColor={item.primaryColor}
        icon={item.icon}
        onClick={handleClick}
      />;
    });
  };
  return (
    <div>
      <h1>Aprende useEffect</h1>
      {renderTechs()}
    </div>
  );
}

export default List;
