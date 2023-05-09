import React, { useEffect, useState } from "react";
import Left from "./Left";
import Selected from "./Selected";

const Home = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("/data/fetch.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <Left items={items} onItemClick={handleItemClick} />
      <Selected selectedItem={selectedItem} />
    </div>
  );
};

export default Home;
