import React from 'react'
import styled from 'styled-components'
import DropD from './DropD';

const Box = styled.div`
  background-color: white;
  height: 60%;
  margin-left: 2%;
  border-radius: 5px;
  box-shadow: 1px 1px 4px 0 lightgrey;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
`;

const Card = styled.div`
  background-color: #C6C6C6;
  height: 457px;
  border-radius: 6px;
`;

const Ele = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function Orderstatus() {
  return (
    <Box>
      <Ele>Map<DropD/></Ele>
      <Card/>
    </Box>
  )
}

export default Orderstatus
