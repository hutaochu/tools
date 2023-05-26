import {useState} from "react"

function MyButton() {
  return (
    <button>my button</button>
  )
}

function ClickButton() {
  function handleClick() {
    setCount(count+1)
  }

  const [count, setCount] = useState(0)
  return (
    <button onClick={handleClick}>click me {count} times!!!</button>
  )
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(p =>
    <li
      key={p.id}
      style={{ color: p.isFruit ? 'magenta' : 'darkgreen' }}
    >
      {p.title}
    </li>
  )
  return (
    <ul>{listItems}</ul>
  )
}

export {
  MyButton,
  ClickButton,
  ShoppingList,
}