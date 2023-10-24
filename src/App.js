import { useState } from "react";
import { nanoid } from "nanoid";
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";


import './App.css';

function addItem(date, link, description, priority) {
  setParkingLotItem((oldItems) => [
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
let [ParkingLotItem, setParkingLotItem ] = useState([
    {
        id: nanoid(),
        date: "04/10/2023",
        priority: "Low",
        link: "https://google.com",
        description: "Knower of All",
    },
   
    {
        id: nanoid(),
        date: "25/12/2023",
        priority: "High",
        link: "https://netflix.com/",
        description: "The Christmas Movie",
    },
  setParkingLotItem(olditems)
  ]);  

let result = [];

for (let item of ParkingLotItem) {
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
          <ParkingLotList parkingLotItem={ParkingLotItem}/>
      </main>
    </div>
  );
}

export default App;