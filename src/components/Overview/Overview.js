import React from 'react'
import styled from 'styled-components';
import Orderrequest from "./OrderRequest/orderrequest";
import Orderstats from "./OrderStats/orderstats";
import Orderstatus from "./OrderStatus/orderstatus";
import DeliveryStatus from "./DeliveryStatus/DeliveryStatus";
import DroneStatus from "./DroneStatus/droneStatus";
import TimelineComp from './Timeline/timeline';

const AM1  = styled.div`
    display: flex;
    flex-direction: row;
    width: 75%;
    width: calc(100% - 345px);
`;
const AM2  = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
`;
const AM3  = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
`;

function Overview() {
  return (
    <AM1>
      <AM2>
        <Orderstats />
        <Orderstatus />
        <DroneStatus/>
      </AM2>

      <AM3>
        <Orderrequest />
        <TimelineComp/>
        <DeliveryStatus/>
      </AM3>
    </AM1>
  )
}

export default Overview
