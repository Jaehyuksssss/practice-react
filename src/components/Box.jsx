import React from "react";

const Box = ({ items, onItemClick, boxSide }) => {
  return (
    <div style={{ width: "400px", height: "800px", border: "1px solid black" }}>
      {items.map((item) => (
        <div key={item.id}>
          {item.tag}
          <button onClick={() => onItemClick(item, boxSide)}>
            <span>{boxSide === "left" ? ">" : "<"}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Box;
