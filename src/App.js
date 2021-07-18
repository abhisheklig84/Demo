import React from "react";
import Orderrequest from "./components/OrderRequest/orderrequest";
import Orderstats from "./components/OrderStats/orderstats";
import Orderstatus from "./components/OrderStatus/orderstatus";
import DeliveryStatus from "./components/DeliveryStatus";
import { ConfigureStore } from "./Redux/configureStore";
import { Provider } from "react-redux";
import TimelineComp from "./components/timeline";
import { StylesProvider } from "@material-ui/core";
import SideBar from "./components/SideBar";
import styled from "styled-components";

const store = ConfigureStore();

const AM1  = styled.div`
    display: flex;
    flex-direction: row;
`;
const AM2  = styled.div`
    display: flex;
    flex-direction: column;
`;
const AM3  = styled.div`
    display: flex;
    flex-direction: column;
`;

function App() {    
    return (
      <Provider store= {store}>
        <StylesProvider injectFirst>
            <AM1>
                <SideBar/>
                <AM2>
                <Orderstats />
                <Orderstatus />
                </AM2>

                <AM3>
                <Orderrequest />
                <TimelineComp/>
                <DeliveryStatus/>
                </AM3>
            </AM1>
        </StylesProvider>
    </Provider>
    );
}

export default App;
