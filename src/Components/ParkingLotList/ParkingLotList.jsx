import React from "react";
import ParkingLotItem from './ParkingLotItem';

import './ParkingLot.css';

export default function ParkingLotList({ parkingLotItem }){
    let ParkingLotItemJsx = parkingLotItem.map( item =>
        <ParkingLotItem
            key={item.id}
            id={item.id}
            date={item.date}
            priority={item.priority}
            link={item.link}
            description={item.description}/>
    );

    return (
        <section classname="parking-lot-list-container">
            { ParkingLotItemJsx }
        </section>
    );
}