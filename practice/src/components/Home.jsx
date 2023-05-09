import React, { useEffect, useState } from "react";
import Box from "./Box";

const Home = () => {
  const [boxItems, setBoxItems] = useState({ left: [], right: [] });
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("/data/fetch.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setBoxItems((prevItems) => ({ ...prevItems, left: data }));
      });
  }, []);

  const handleBoxItemClick = (item, boxSide) => {
    console.log(boxItems[boxSide]);
    const oppositeBoxSide = boxSide === "left" ? "right" : "left";
    const newItems = boxItems[boxSide].filter((i) => i.id !== item.id);
    setBoxItems((prevItems) => ({
      ...prevItems,
      [boxSide]: newItems,
      [oppositeBoxSide]: [...prevItems[oppositeBoxSide], item],
    }));
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <Box
        items={boxItems.left}
        onItemClick={(item) => handleBoxItemClick(item, "left")}
        selectedItem={selectedItem}
        onItemRemove={(item) => handleBoxItemClick(item, "left")}
      />
      <Box
        items={boxItems.right}
        onItemClick={(item) => handleBoxItemClick(item, "right")}
        selectedItem={selectedItem}
        onItemRemove={(item) => handleBoxItemClick(item, "right")}
      />
    </div>
  );
};

export default Home;
