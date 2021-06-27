import React from "react";
import Header from "./components/Header/Header";
import Orderrequest from "./components/OrderRequest/orderrequest";
import Orderstats from "./components/OrderStats/orderstats";
import Orderstatus from "./components/OrderStatus/orderstatus";

/**
 * NOTE::
 *
 * Use this function as reference when you make API calls.
 *
 * Don't forget to check the `auth.json` & `db.json` files for knowing the protected routes,
 * and database schema (format of the JSON you'll get from the API call).
 *
 * Lastly, whenever you're confused, try `console.log()`ing everything, from the `auth_token` to the JSON response.
 */

const getToken = () => {
    fetch("http://localhost:5000/auth/login", {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "bruno@email.com",
            password: "bruno",
        }),
    })
        .then((response) => response.json())
        .then((token) => {
            console.log(token);
        });
};

function App() {
    getToken();

    return (
        <React.Fragment>
            <div>
                <button onClick={() => getToken()}>DEMO LOGIN</button>
            </div>
            <div>
                <Orderstats />
                <Orderrequest />
                <Orderstatus />
                <Header />
            </div>
        </React.Fragment>
    );
}

export default App;
