import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';


const Box = styled.div`
  background-color: white;
  height: 274px;
  width: 779px;
  margin-left: 2%;
  margin-top: 30px;
  border-radius: 6px;
  box-shadow: 0px 4px 4px #C4C4C4;
  box-sizing: border-box;
`;

const Ele = styled.div`
  margin: 10px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SCircularProgress = styled(CircularProgress)`
  margin-right: 20px;
  color: #109CF1;
  margin-left: ${props => props.mr}px;
  /* border: 0.5px solid grey; */
  /* border-radius: 1000px; */
`;

function DroneStatus() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    },[]);

  return (
    <Box>
      <Ele>Drone Status</Ele><br/>
      <Ele>
      <SCircularProgress size={150} thickness={2} mr="30" variant="determinate" value={50} />
      <SCircularProgress size={150} thickness={2} variant="determinate" value={75} />
      <SCircularProgress size={150} thickness={2} variant="determinate" value={100} />
      <SCircularProgress size={150} thickness={2} variant="determinate" value={progress} />
      </Ele>
    </Box>
  )
}

export default DroneStatus

