import React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@material-ui/lab';
import CheckIcon from '@material-ui/icons/Check';
import styled from 'styled-components';
import Check from '../Assets/Check.svg'
import Confirmed from '../Assets/Confirmed.svg'
import Dispatched from '../Assets/Dispatched.svg'
import Packed from '../Assets/Packed.svg'
import AccessTimeIcon from '@material-ui/icons/AccessTime';


const Box = styled.div`
    border-radius: 5px;
    width: 345px;
    margin-left: 20px;
`;

const Head = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
`;

const Data = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-left: 20px;
`;

const Img = styled.img` 
  width: 21px; 
`;

const Link = styled.div`
  float: right;
  display: ${props => props.idisplay};
  color: ${props => props.icolor || "black"};
  margin: ${props =>props.mr || "0px"};
  font-size: 14px;
  font-weight: 800;
`;

const StyledAccessTimeIcon = styled(AccessTimeIcon)`
  background-color: #109CF1;
  padding: 5.5px;
  border-radius: 100px;
  color: white;
`;

const StyledTimelineItem = styled(TimelineItem)`
  margin-left: -120px; 
`;

const StyledTimelineDot = styled(TimelineDot)`
    background-color: #109CF1;
    margin: 0px;
    margin-right: 16px;
`;

const StyledTimelineContent = styled(TimelineContent)`
  font-weight: 700;
  font-size: ${props => props.isize};
  line-height: 21px;
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  width: 2px;
  margin-right: 16px;
  background-color: black;
`;

function TimelineComp() {
  return (
    <Box>
      <Link icolor = "rgba(7, 166, 243, 1)"  mr = "11px"> See all </Link>
      <Head>Live Order</Head>
      <Link idisplay="flex"><StyledAccessTimeIcon/>20 min </Link>
      <Data>Order Id - 10034</Data>
      <Data>Name - P K Traders</Data>
      <Timeline>
      <StyledTimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot>
            <CheckIcon />
          </StyledTimelineDot>
          <StyledTimelineConnector />
        </TimelineSeparator>
        <Img src={Confirmed}/><StyledTimelineContent isize="14px"> Confirmed </StyledTimelineContent>
        <StyledTimelineContent isize="12px"> 11:00 am </StyledTimelineContent>
      </StyledTimelineItem>

      <StyledTimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot>
            <CheckIcon />
          </StyledTimelineDot>
          <StyledTimelineConnector />
        </TimelineSeparator>
        <Img src={Check}/>
        <StyledTimelineContent isize="14px"> Check </StyledTimelineContent>
        <StyledTimelineContent isize="12px"> 12:30 pm </StyledTimelineContent>
      </StyledTimelineItem>

      <StyledTimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot>
            <CheckIcon />
          </StyledTimelineDot>
          <StyledTimelineConnector/>
        </TimelineSeparator> 
        <Img src={Packed}/>  
        <StyledTimelineContent isize="14px"> Packed </StyledTimelineContent>
        <StyledTimelineContent isize="12px"> 2:00 pm </StyledTimelineContent>
      </StyledTimelineItem>

      <StyledTimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot>
            <CheckIcon   />
          </StyledTimelineDot>
        </TimelineSeparator>
        <Img src={Dispatched}/>
        <StyledTimelineContent isize="14px"> Dispatched </StyledTimelineContent>
        <StyledTimelineContent isize="12px"> 5:00 pm </StyledTimelineContent>
      </StyledTimelineItem>

    </Timeline>
    </Box>
  )
}

export default TimelineComp
