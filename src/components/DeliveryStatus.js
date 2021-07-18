import React from 'react'
import styled from 'styled-components'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Box = styled.div`
    background-color: white;
    border-radius: 5px;
    margin-left: 20px;
    box-shadow: 2px 3px 10px 0 grey;
    height: 151px;
`;

const Head = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
`;

function createData(Srno , Orderid, Status) {
  return { Srno , Orderid, Status };
}

const rows = [
  createData(1,12345, 'Delivered'),
  createData(2,12345, 'Delivered'),  
];
const STableCell = styled(TableCell)`
    font-weight: 500;
    font-size: 14px;
    color: ${props => props.icolor};
    border: none;
    padding-top: 5px;
    padding-bottom: 0px;
    text-align: center;
`;
const STable = styled(Table)`
`;

function DeliveryStatus() {
  return (
    <Box>
      <Head>Recent Delivery status</Head>
        <STable>
        <TableHead>
            <TableRow>
            <STableCell>Sr no.</STableCell>
            <STableCell align="right">Order id</STableCell>
            <STableCell align="right">Status</STableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <TableRow key={row.srno}>
                <STableCell component="th" scope="row">{row.Srno}</STableCell>
                <STableCell align="right">{row.Orderid}</STableCell>
                <STableCell align="right" icolor="#109CF1">{row.Status}</STableCell>
            </TableRow>
            ))}
        </TableBody>
        </STable>
    </Box>
    
  )
}

export default DeliveryStatus
