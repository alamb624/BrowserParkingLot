import { useState } from "react";
import { nanoid } from "nanoid";
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";
import ParkingLotItem from "./Components/ParkingLotList/ParkingLotItem";


import './App.css';

function addItem(date, link, description, priority) {
  setParkingLotItems((oldItems) => [
          ...oldItems, 
          {
            id: nanoid(),
            date,
            description,
            link,
            priority,
          },
     ]);
  }

function App() {
  let [ParkingLotItems, setParkingLotItems] = useState([
    {
        id: nanoid(),
        date: "10/04/2023",
        priority: "Low",
        link: "https://google,com/",
        description: "Knower of All",
    },
    {
        id: nanoid(),
        date: "12/25/2023",
        priority: "High",
        link: "https://netflix.com/",
        description: "The Christmas Movie",
    },
  ]);  

let result = [];

for (let item of parkingLotItems) {
    result.push(`
    <li>
        <a href="${item.link}">
            ${item.description} (${item.date} - ${item.priority})
        </a>
    </li>`);
} 

console.log(result);

let html = `<ul>${result.join(",")}</ul>`;

console.log(html);

  return (
    <div className="App">
      <header>
          <h1> Browser Parking Lot</h1>
          <p>Take Your Tabs To The Valet!</p>
      </header>
      <main>
          <ParkingLotForm addItem={addItem}/>
          <ParkingLotList parkingLotItems={ParkingLotItems}/>
      </main>
    </div>
  );
}

export default App;