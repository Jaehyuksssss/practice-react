# 구현 사항

Home.jsx , Box.jsx

1. useEffect를 사용하여 /data/fetch.json에서 초기 데이터를 가져와 왼쪽 박스에 표시하였습니다.

````jsx
 useEffect(() => {
    fetch("/data/fetch.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setBoxItems((prevItems) => ({ ...prevItems, left: data }));
      });
  }, []);```
````

2. handleBoxItemClick 함수

- handleBoxItemClick 는 Box 컴포넌트에서 버튼을 클릭 했을 때 실행되는 함수입니다.
- 매개변수의 item은 클릭한 아이템이고, boxSide는 클릭한 아이템이 속한 Box 컴포넌트가 LEFT인지 RIGHT인지를 나타냅니다.
- oppositeBoxSide는 boxSide와 반대되는 Box 컴포넌트를 나타내는 변수입니다. ex)) left=>right
- newItems는 클릭한 아이템을 제외한 boxSide에 있는 모든 아이템들을 필터링해서 새로운 배열로 만듭니다.
- setBoxItems를 사용하여 boxItems 상태를 업데이트합니다. 이때, 기존의 prevItems 객체를 복사한 후, boxSide에 해당하는 배열을 newItems로 교체하고, oppositeBoxSide에 해당하는 배열에는 클릭한 아이템을 추가합니다.

```jsx
const handleBoxItemClick = (item, boxSide) => {
  const oppositeBoxSide = boxSide === LEFT ? RIGHT : LEFT;
  const newItems = boxItems[boxSide].filter((i) => i.id !== item.id);
  setBoxItems((prevItems) => ({
    ...prevItems,
    [boxSide]: newItems,
    [oppositeBoxSide]: [...prevItems[oppositeBoxSide], item],
  }));
};
```

3. props로 넘기는 부분

- Box컴포넌트를 재사용하고
  boxSide,items,onItemClick함수를 props로 넘겨주고 Box 컴포넌트에서는 구조분해할당을 하였습니다.

```jsx
return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <Box
        boxSide={LEFT}
        items={boxItems.left}
        onItemClick={(item) => handleBoxItemClick(item, LEFT)}
      />
      <Box
        boxSide={RIGHT}
        items={boxItems.right}
        onItemClick={(item) => handleBoxItemClick(item, RIGHT)}
      />
    </div>

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

```

- UTils에 const.js에서 상수를 관리하여 코드를 유연하게 관리하였습니다.
