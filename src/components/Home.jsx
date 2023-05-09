import React, { useEffect, useState } from "react";
import Box from "./Box";

const Home = () => {
  const [boxItems, setBoxItems] = useState({
    left: {
      key: "left",
      value: [],
    },
    right: {
      key: "right",
      value: [],
    },
  });

  useEffect(() => {
    fetch("/data/fetch.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setBoxItems({
          right: {
            key: "right",
            value: [],
          },
          left: {
            key: "left",
            value: [...data],
          },
        });
      });
  }, []);

  const handleBoxItemClick = (item, key) => {
    if (key === "left") {
      setBoxItems({
        left: {
          key: "left",
          value: [...boxItems.left.value.filter((it) => it.tag !== item.tag)],
        },
        right: {
          key: "right",
          value: [...boxItems?.right?.value, item],
        },
      });
    } else {
      setBoxItems({
        left: {
          key: "left",
          value: [...boxItems?.left?.value, item],
        },
        right: {
          key: "right",
          value: [...boxItems.right.value.filter((it) => it.tag !== item.tag)],
        },
      });
    }
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <Box
        items={boxItems.left}
        onItemClick={(item, key) => handleBoxItemClick(item, key)}
        onItemRemove={(item) => handleBoxItemClick(item)}
      />
      <Box
        items={boxItems.right}
        onItemClick={(item, key) => handleBoxItemClick(item, key)}
        onItemRemove={(item) => handleBoxItemClick(item)}
      />
    </div>
  );
};

export default Home;
