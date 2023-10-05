import { useState } from "react";
import ParkingLotForm from "./Components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./Components/ParkingLotList/ParkingLotList";


import './App.css';

function App() {
  let [parkingLotItems, setParkingLotItems] = useState([
    {
        date: "2023-10-04",
        priority: "Low",
        link: "https://google,com/",
        description: "Knower of All",
    },
    {
        date: "2023-12-25",
        priority: "High",
        link: "https://netflix.com/",
        description: "The Christmas Movie",
    },
  ]);
  
  return (
    <div className="App">
      <header>
          <h1> Browser Parking Lot</h1>
          <p>Take Your Tabs To The Valet!</p>
      </header>
      <main>
          <ParkingLotForm />
          <ParkingLotList />
      </main>
    </div>
  );
}

export default App;