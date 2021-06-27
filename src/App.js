import React from "react";
import Header from "./Components/Header/Header";
import Orderrequest from "./components/OrderRequest/orderrequest";
import Orderstats from "./components/OrderStats/orderstats";
import Orderstatus from "./components/OrderStatus/orderstatus";

function App() {
    return (
        <div>
            <Orderstats />
            <Orderrequest />
            <Orderstatus />
            <Header />
        </div>
    );
}

export default App;
