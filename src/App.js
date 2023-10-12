import { useState } from "react";
import { nanoid } from "nanoid";
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";


import './App.css';

function App() {
  let [ParkingLotItems, setParkingLotItems] = useState([
    {
        id: nanoid(),
        date: "2023-10-04",
        priority: "Low",
        link: "https://google,com/",
        description: "Knower of All",
    },
    {
        id: nanoid(),
        date: "2023-12-25",
        priority: "High",
        link: "https://netflix.com/",
        description: "The Christmas Movie",
    },
  ]);  

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