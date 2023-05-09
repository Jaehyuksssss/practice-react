import React from "react";

const Box = ({ items, onItemClick, selectedItem }) => {
  return (
    <div style={{ width: "400px", height: "800px", border: "1px solid black" }}>
      {items.map((item) => (
        <div key={item.id} className={selectedItem === item ? "active" : ""}>
          {item.tag}
          <button onClick={() => onItemClick(item)}>
            <span>{">"}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Box;
