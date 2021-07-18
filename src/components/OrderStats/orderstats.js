import React from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 70px;
`;

const Card = styled.div`
  padding: 10px;
  margin: 20px 0px 20px 19px;
  width: ${props => props.iwidth};
  height: 101px;
  background-color: white;
  text-align: center;
  box-shadow: 0px 4px 4px #C4C4C4;
`;

const Stat = styled.div`
  margin-top: 10px;
  font-weight: 700;
  font-size: 25px;
`;

const Name = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const SFiberManualRecordIcon = styled(FiberManualRecordIcon)`
  color: ${props => props.icolor};
`;
function Orderstats() {
  return (
      <Box>
      <Card iwidth="172px">
        <Stat>225</Stat>
        <Name><SFiberManualRecordIcon icolor="#2ED47A" fontSize="large" />Order's Done</Name>
      </Card>
      <Card iwidth="182px">
        <Stat>120</Stat>
        <Name><SFiberManualRecordIcon icolor="#FC0C0C" fontSize="large" />Order's Denies</Name>
      </Card>
      <Card iwidth="182px">
        <Stat>80</Stat>
        <Name><SFiberManualRecordIcon icolor="#109CF1" fontSize="large" />Order's Pending</Name>
      </Card>
      <Card iwidth="181px">
        <Stat>110</Stat>
        <Name><SFiberManualRecordIcon icolor="#FFB946" fontSize="large"/>New Orders</Name>
      </Card>
      </Box>
  )
}

export default Orderstats
