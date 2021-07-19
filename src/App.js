import React from "react";
import { ConfigureStore } from "./Redux/configureStore";
import { Provider } from "react-redux";
import { StylesProvider } from "@material-ui/core";
import SideBar from "./components/SideBar/SideBar";
import styled from "styled-components";
import Overview from "./components/Overview/Overview";

const store = ConfigureStore();

const AM1  = styled.div`
    display: flex;
    flex-direction: row;
`;

function App() {    
    return (
      <Provider store= {store}>
        <StylesProvider injectFirst>
            <AM1>
                <SideBar/>
                <Overview/>
            </AM1>
        </StylesProvider>
    </Provider>
    );
}

export default App;
