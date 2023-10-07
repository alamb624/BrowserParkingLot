import React from 'react';
import ParkingLotItem from './ParkingLotItem';

export default function ParkingLotList({ parkingLotItems }) {

    let ParkingLotItemsJsx = parkingLotItems.map( item => <ParkingLotItem />);

    return (
<div>
    ParkingLotList
    { ParkingLotItemsJsx }
</div>
);
} 