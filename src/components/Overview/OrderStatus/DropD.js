import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

const SButton = styled(Button)`
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    margin-right: 10px;
`;
export default function DropD() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [data,setData] = React.useState("Zone 1");

  const one = () => {
    setData("Zone 1");
    handleClose();
  }
  const two = () =>{
    setData("Zone 2");
    handleClose();
  }
  const three = () =>{
    setData("Zone 3");
    handleClose();
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <SButton onClick={handleClick}>
        {data}<ExpandMoreIcon/>
      </SButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={one}>Zone 1</MenuItem>
        <MenuItem onClick={two}>Zone 2</MenuItem>
        <MenuItem onClick={three}>Zone 3</MenuItem>
      </Menu>
    </div>
  );
}
