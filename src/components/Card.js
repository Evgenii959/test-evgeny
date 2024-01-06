import "./Card.css";
import Label from "./Label";
import { dataCards } from "../constants/DataCards";

export function Card(props) {
  return (
    <>
      <div className="card">
        <img
          src={dataCards[props.currentIndex].image}
          alt="синий квадрат"
          className="image"
        />
        <div className="block">
          <div className="label-block">
            <Label card={dataCards} />
          </div>
          <div className="list">
            <p className="data">
              From: {dataCards[props.currentIndex].dataFrom}
            </p>
            <p className="data">Date: {dataCards[props.currentIndex].dataTo}</p>
            <p className="data">Size: {dataCards[props.currentIndex].size}</p>
            <p className="data">
              MemData: {dataCards[props.currentIndex].memData}
            </p>
            <p className="data">
              GroupArr: {dataCards[props.currentIndex].array}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
