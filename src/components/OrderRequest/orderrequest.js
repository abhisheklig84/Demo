import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { fetchOrders } from '../../Redux/ActionCreaters';
import Pagination from '../Pagination';

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



function RenderOrder ({order}){
  return (
    <Card>
          <Link>39 min ago</Link>
          <Data>Order Id - {order.orderId}</Data>
          <Link>{order.itemsInCart}</Link>
          <Data>Name - {order.name}</Data>
          <Link>{order.weight} kg</Link>
          <Data>Customer id - {order.customerId}</Data>
          <Link>{order.distance}km</Link>
          <Data>50       20min</Data>
          <br/>
          <Button>Accept</Button>
          <Button>Deny</Button>
      </Card>
  )
}

function Orderrequest(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);

  useEffect(() =>{
    props.fetchOrders();
  },[])

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = props.orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const od = currentOrders.map((order) =>{
    return(
        <div >
        <RenderOrder order={order}/>
        
        </div>
    )
  })

  return (
    <Box>
      <Link icolor = "rgba(7, 166, 243, 1)"  mr = "10px">See all</Link>
      <Head>Order Requests</Head>
      {od}
      <Pagination ordersPerPage= {ordersPerPage} totalOrders={props.orders.length} paginate={paginate} /> 
    </Box>
  )
}
const mapStateToProps = state => {
  return{
    orders: state.orders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOrders: () => {dispatch(fetchOrders())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Orderrequest);
