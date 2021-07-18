import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { fetchOrders } from '../../Redux/ActionCreaters';
import Pagination from '../Pagination';
import Bag from '../../Assets/Bag.svg';
import Location from '../../Assets/Location.svg';
import Dollar from '../../Assets/Dollar.svg';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Box = styled.div`
    width: 345px;
    margin-left: 20px;
    margin-top: 65px;
`;

const Card = styled.div`
  background-color: white;
  height: 176px;
  width: 345px;
  padding: 10px 0px 10px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 2px 3px 10px 0 grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Set = styled.div`
  display: flex;
  flex-direction: column;
`;

const Ele = styled.div`
  width: ${props => props.iwidth}px;
  font-size: ${props =>props.isize || "14"}px;
  font-weight: ${props =>props.iweight || "700"};
  color: ${props =>props.icolor || "#323C47"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  margin-right: ${props =>props.mr}; 
`;

const Button = styled.span`
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  width: 119px;
  height: 27px;
  background-color: ${props =>props.ibg};
  color: ${props =>props.icolor || "white"};
  text-align: center;
  padding-top: 2px;
  margin:10px 0px 10px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Img = styled.img`
    background-color: ${props => props.icolor || "none"};
    padding: 7px;
    border-radius: 100px;
`;

function RenderOrder ({order}){
  return (
    <Card>
      <Set>
        <Ele iweight="900" icolor="#575555">Order Id - {order.orderId}</Ele>
        <Ele>Name - {order.name}</Ele>
        <Ele>Customer id - {order.customerId}</Ele>
        <Ele iwidth="170">
          <Ele iwidth="40" icolor="#575555" mr="10px"><Img src={Dollar}/>50 </Ele>
          <Ele icolor="#575555" iwidth="70"><AccessTimeIcon fontSize="small"/>20min</Ele></Ele>
        <Ele>
          <Button ibg="#2CA6F1">Accept</Button>
          <Button icolor="#2CA6F1">Deny</Button>
        </Ele>
      </Set>
      <Set>
        <Ele iwidth="100" isize="12px" icolor="">39 min ago</Ele>
        <Ele iwidth="70"><Img icolor="#109Cf1" src={Bag}/>{order.itemsInCart}</Ele>
        <Ele iwidth="70"><Img icolor="#109Cf1" src={Bag}/>{order.weight} kg</Ele>
        <Ele iwidth="70"><Img icolor="#109Cf1" src={Location}/>{order.distance} km</Ele>
      </Set>
      </Card>
  )
}

function Orderrequest(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(2);

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
      <Ele>
      <Ele isize="16">Order Requests</Ele>
      <Ele icolor = "#109CF1">See all</Ele></Ele>
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
