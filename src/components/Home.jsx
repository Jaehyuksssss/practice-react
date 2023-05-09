import React, { useEffect, useState } from "react";
import Box from "./Box";
import { RIGHT, LEFT } from "../utils/const";

const Home = () => {
  const [boxItems, setBoxItems] = useState({ left: [], right: [] });

  useEffect(() => {
    fetch("/data/fetch.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setBoxItems((prevItems) => ({ ...prevItems, left: data }));
      });
  }, []);

  const handleBoxItemClick = (item, boxSide) => {
    const oppositeBoxSide = boxSide === LEFT ? RIGHT : LEFT;
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
        onItemClick={(item) => handleBoxItemClick(item, LEFT)}
        onItemRemove={(item) => handleBoxItemClick(item, LEFT)}
      />
      <Box
        items={boxItems.right}
        onItemClick={(item) => handleBoxItemClick(item, RIGHT)}
        onItemRemove={(item) => handleBoxItemClick(item, RIGHT)}
      />
    </div>
  );
};

export default Home;
