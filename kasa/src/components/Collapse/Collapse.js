import "../../styles/dist/main.scss";
import "./Collapse.scss";
import { useState } from "react";

function Collapse({ title, content, size }) {
  const [selected, setSelected] = useState(false);

  return (
    <div className="wrapper">
      <div className="collapse">
        <div className="collapse-header" onClick={() => setSelected(!selected)}>
          <h2 className="collapse-title">{title}</h2>
          <div className={selected ? "selected" : "unselected"}></div>
        </div>
        <div className={selected ? "collapse-body show" : "collapse-body"}>
          <div className="collapse-content">
            <span className="collapse-content-text">{content}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Collapse;
