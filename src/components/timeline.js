import React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@material-ui/lab';
import CheckIcon from '@material-ui/icons/Check';
import styled from 'styled-components';
import Check from '../Assets/Check.svg'
import Confirmed from '../Assets/Confirmed.svg'
import Dispatched from '../Assets/Dispatched.svg'
import Packed from '../Assets/Packed.svg'
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const StyledAccessTimeIcon = styled(AccessTimeIcon)`
  background-color: #109CF1;
  padding: 5.5px;
  height: 15px;
  border-radius: 100px;
  width: 15px;
`;
const StyledTimelineItem = styled(TimelineItem)`
  width: 500px;
  margin-left: -140px;
`;
const StyledTimelineDot = styled(TimelineDot)`
    background-color: #109CF1;
    margin: 0px;
    margin-right: 16px;
    width: 24px;
`;
const StyledTimeline = styled(Timeline)`
`;
const StyledTimelineContent = styled(TimelineContent)`
  width: 50px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  width: 2px;
  background-color: black;
  margin-left: -20px;
`;

const Box = styled.div`
    background-color: white;
    border-radius: 20px;
    height: auto;
    float: right;
    width: 25%;
    margin-right: 20px;
    margin-top: 20px;
`;

const Head = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  padding: 10px;
`;

const Data = styled.div`
  font-size: 0.8em;
  font-weight: 600;
  margin-left: 20px;
`;
const Img = styled.img`
    width: 21px;
`;

const Link = styled.div`
  float: right;
  color: ${props => props.icolor || "black"};
  margin: ${props =>props.mr || "0px"};
  font-size: 0.8em;
  font-weight: 800;
`;

function TimelineComp() {
  return (
    <Box>
      <Link icolor = "rgba(7, 166, 243, 1)"  mr = "10px"> See all </Link>
      <Head>Live Order</Head>
      <Link><StyledAccessTimeIcon/>20 min </Link>
      <Data>Order Id - 10034</Data>
      <Data>Name - P K Traders</Data>
      <StyledTimeline>
      <StyledTimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot>
            <CheckIcon />
          </StyledTimelineDot>
          <StyledTimelineConnector />
        </TimelineSeparator>
        <Img src={Confirmed}/><StyledTimelineContent> Confirmed </StyledTimelineContent>
        <StyledTimelineContent> 11:00 am </StyledTimelineContent>
      </StyledTimelineItem>

      <StyledTimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot>
            <CheckIcon />
          </StyledTimelineDot>
          <StyledTimelineConnector />
        </TimelineSeparator>
        <Img src={Check}/>
        <StyledTimelineContent> Check </StyledTimelineContent>
        <StyledTimelineContent> 12:30 pm </StyledTimelineContent>
      </StyledTimelineItem>

      <StyledTimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot>
            <CheckIcon />
          </StyledTimelineDot>
          <StyledTimelineConnector/>
        </TimelineSeparator> 
        <Img src={Packed}/>  
        <StyledTimelineContent> Packed </StyledTimelineContent>
        <StyledTimelineContent> 2:00 pm </StyledTimelineContent>
      </StyledTimelineItem>

      <StyledTimelineItem>
        <TimelineSeparator>
          <StyledTimelineDot>
            <CheckIcon   />
          </StyledTimelineDot>
        </TimelineSeparator>
        <Img src={Dispatched}/>
        <StyledTimelineContent> Dispatched </StyledTimelineContent>
        <StyledTimelineContent> 5:00 pm </StyledTimelineContent>
      </StyledTimelineItem>

    </StyledTimeline>
    </Box>
  )
}

export default TimelineComp
