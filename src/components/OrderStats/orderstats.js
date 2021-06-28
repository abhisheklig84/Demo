import React from 'react'
import styled from "styled-components";
import ScrollMenu from 'react-horizontal-scrolling-menu';


const Box = styled.div`
    margin-left: 20%;
    width : 50%;
    background-color: #F5F5F5;
    border-radius: 20px;
    height: 100px;
    float: left;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    overflow-x: auto;
`;

const Card = styled.div`
  padding: 5px;
  margin: 20px;
  width: 100px;
  height: 50px;
  background-color: white;
  text-align: center;
  border-radius: 5px;
  box-shadow: 2px 3px 10px 0 grey;
  /* float: left; */
`;

const Stat = styled.div`
  color: ${props => props.icolor};
  font-weight: bolder;
  font-size: 1.3em;
`;

const Name = styled.div`
    font-size: 0.8em;
`;

function Orderstats() {
  return (
      <Box>
      <Card>
        <Stat icolor = "lightgreen">180</Stat>
        <Name>Order's Done</Name>
      </Card>
      <Card>
        <Stat icolor = "red">20</Stat>
        <Name>Order's Denies</Name>
      </Card>
      <Card>
        <Stat icolor = "blue">60</Stat>
        <Name>Order's Pending</Name>
      </Card>
      <Card>
        <Stat icolor = "orange">140</Stat>
        <Name>New Orders</Name>
      </Card>
      {/* <Card>
        <Stat icolor = "orange">140</Stat>
        <Name>New Orders</Name>
      </Card>
      <Card>
        <Stat icolor = "orange">140</Stat>
        <Name>New Orders</Name>
      </Card> */}
      </Box>
  )
}

export default Orderstats
