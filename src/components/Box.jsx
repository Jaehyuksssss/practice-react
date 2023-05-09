import React from "react";

const Box = ({ items, onItemClick }) => {
  return (
    <div style={{ width: "400px", height: "800px", border: "1px solid black" }}>
      {items &&
        items["value"].map((item) => (
          <div key={item.id}>
            {item.tag}
            <button onClick={() => onItemClick(item, items["key"])}>
              <span>{items?.key === "left" ? ">" : "<"}</span>
            </button>
          </div>
        ))}
    </div>
  );
};

export default Box;
