import React from "react";
import Orderstats from "./components/OrderStats/orderstats";
import Orderrequest from "./components/OrderRequest/orderrequest";
import Orderstatus from "./components/OrderStatus/orderstatus";

function App() {
    return (
        <div>
          <Orderstats/>
          <Orderrequest />
          <Orderstatus/>
        </div>
    );
}

export default App;
