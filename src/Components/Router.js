import React from "react"
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom"
import Home from "Routes/Home"
import Search from "Routes/Search"
import TV from "Routes/TV"



export default () => (
    <Router>
        <>
            <Route path="/" exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
            <Route path="/tv" component={TV} />
            <Redirect from="*" to="/" />
        </>

    </Router>

)