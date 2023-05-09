import React, { useState } from "react";

const Selected = ({ selectedItem }) => {
  const [selected, setSelected] = useState([]);
  console.log(selectedItem);
  // const entireSelected = setSelected();
  return (
    <div style={{ width: "400px", height: "800px", border: "1px solid black" }}>
      {selectedItem ? selectedItem.tag : "Selected"}
    </div>
  );
};

export default Selected;
