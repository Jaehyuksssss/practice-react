import React, { useEffect, useState } from "react";
import Box from "./Box";

const Home = () => {
  const [leftBoxItems, setLeftBoxItems] = useState([]);
  const [rightBoxItems, setRightBoxItmes] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("/data/fetch.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setLeftBoxItems(data);
      });
  }, []);

  const handleLeftBoxItemClick = (item) => {
    const newItems = leftBoxItems.filter((i) => i.id !== item.id);
    setLeftBoxItems(newItems);
    setRightBoxItmes([...rightBoxItems, item]);
  };

  const handleRightBoxItemClick = (item) => {
    const newItems = rightBoxItems.filter((i) => i.id !== item.id);
    setRightBoxItmes(newItems);
    setLeftBoxItems([...leftBoxItems, item]);
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <Box
        items={leftBoxItems}
        onItemClick={handleLeftBoxItemClick}
        selectedItem={selectedItem}
        onItemRemove={handleLeftBoxItemClick}
      />
      <Box
        items={rightBoxItems}
        onItemClick={handleRightBoxItemClick}
        selectedItem={selectedItem}
        onItemRemove={handleRightBoxItemClick}
      />
    </div>
  );
};

export default Home;
