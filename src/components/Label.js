import "./Card.css";
import Close from "../image/close.svg";
import { labelTitle } from "../constants/DataCards.js";

export default function Label() {
  return (
    <>
      {labelTitle.map((label) => {
        return (
          <div className="label">
            <p className="label-title">{label.title}</p>
            <img src={Close} alt="крестик" className="icon" />
          </div>
        );
      })}
    </>
  );
}
