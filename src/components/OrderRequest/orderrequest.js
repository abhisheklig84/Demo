import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    background-color: rgba(228, 229, 229, 1);
    border-radius: 20px;
    height: auto;
    float: right;
    width: 25%;
    margin-right: 20px;
    margin-top: 20px;
    padding: 6px;
    

`;

const Card = styled.div`
  background-color: white;
  height: auto;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Head = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  padding: 10px;
`;

const Data = styled.div`
  font-size: 0.8em;
`;

const Link = styled.div`
  float: right;
  color: ${props => props.icolor || "black"};
  margin: ${props =>props.mr || "0px"};
  font-size: 0.8em;
`;

const Button = styled.span`
  border: 3px solid lightgrey;
  border-radius: 10px;
  padding: 5px 20px 5px 20px;
  font-size: 0.8em;
  margin: 13px;
  position: relative;
  left: 15%;

  &:hover{
    color: white;
    background-color: rgba(7, 166, 243, 1);
    border: 3px solid rgba(7, 166, 243, 1);

  }
`;


function Orderrequest() {
  return (
    <Box>
      <Link icolor = "rgba(7, 166, 243, 1)"  mr = "10px">See all</Link>
      <Head>Order Requests</Head> 
      <Card>
          <Link>39 min ago</Link>
          <Data>Order Id - AB00001</Data>
          <Link>4</Link>
          <Data>Name - P K Traders</Data>
          <Link>6 kg</Link>
          <Data>Customer id - 17262</Data>
          <Link>2km</Link>
          <Data>50       20min</Data>
          <br/>
          <Button>Accept</Button>
          <Button>Deny</Button>
      </Card>
      <Card>
          <Link>39 min ago</Link>
          <Data>Order Id - AB00001</Data>
          <Link>4</Link>
          <Data>Name - P K Traders</Data>
          <Link>6 kg</Link>
          <Data>Customer id - 17262</Data>
          <Link>2km</Link>
          <Data>50       20min</Data>
          <br/>
          <Button>Accept</Button>
          <Button>Deny</Button>
      </Card>
    </Box>
  )
}

export default Orderrequest
