import React from "react";

const Left = (props) => {
  const handleClick = (item) => {
    props.onItemClick(item);
  };

  return (
    <div style={{ width: "400px", height: "800px", border: "1px solid black" }}>
      {props.items.map((item) => {
        return (
          <div key={item.id}>
            {item.tag}{" "}
            <button onClick={() => handleClick(item)}>
              <span>></span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Left;
