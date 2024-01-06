import "./App.css";
import { Card } from "../src/components/Card";
import Left from "./image/left.svg";
import Right from "./image/right.svg";
import Save from "./image/disc.svg";
import Trash from "./image/trash.svg";
import React, { useState } from "react";
import { dataCards } from "./constants/DataCards";

function App() {
  const [currentItem, setCurrentItem] = useState(0);

  const handlePrev = () => {
    setCurrentItem((prev) => (prev > 0 ? prev - 1 : dataCards.length - 1));
  };

  const handleNext = () => {
    setCurrentItem((next) => (next < dataCards.length - 1 ? next + 1 : 0));
  };

  return (
    <section className="page">
      <Card currentIndex={currentItem} />
      <div className="button-block">
        <button className="button" onClick={handlePrev}>
          <img src={Left} alt="стрелка влево" />
        </button>
        <button className="button">
          <img src={Save} alt="диск" />
        </button>
        <button className="button">
          <img src={Trash} alt="корзина" />
        </button>
        <button className="button">
          <img src={Right} alt="стрелка вправо" onClick={handleNext} />
        </button>
      </div>
    </section>
  );
}

export default App;
