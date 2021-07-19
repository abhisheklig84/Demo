import React from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    background-color: white;
    overflow-x: auto;
`;
const Li = styled.span`
    padding: 1px 8px 1px 8px;

    &:hover{
        background-color: rgba(7, 166, 243, 1);
        border-radius: 4px;
    }

    &.${props => props.activeClassName} {
    background-color: rgba(7, 166, 243, 1);
    }

    &:hover:not(.active){
        background-color: lightgrey;
    }
`;
const A = styled.a`


`;

const Pagination = ({ordersPerPage, totalOrders, paginate}) => {
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(totalOrders / ordersPerPage);i++){
        pageNumbers.push(i);
    }

  return (
    <div>
      <Ul>
        {pageNumbers.map(number => (
          <Li key={number} activeClassName="any" >
            <A onClick={() => paginate(number)}>
              {number}
            </A>
          </Li>
        ))}
      </Ul>
    </div>
  )
}

export default Pagination
