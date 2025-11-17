export default function App(){
  const fruits = [
    { name: "Apple", calories: 95 },
    { name: "Banana", calories: 105 },
    { name: "Cherry", calories: 50 },
    { name: "Pineapple", calories: 452 },
    { name: "Elderberry", calories: 73 },
  ];

  const newList = fruits.map((fruits) => <li>{fruits.name} has {fruits.calories} calories</li>)

  return <ol>{newList}</ol>
}
