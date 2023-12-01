import React from "react";
import ParkingLotItem from "./ParkingLotItem";

import "./ParkingLot.css";

export default function ParkingLotList({ parkingLotItem }){
    let ParkingLotItemJsx = parkingLotItem.map( item => 
        <ParkingLotItem key={item.id} {...item} />
    );

    return (
        <section classname="parking-lot-list-container">
            { ParkingLotItemJsx }
        </section>
    );
}