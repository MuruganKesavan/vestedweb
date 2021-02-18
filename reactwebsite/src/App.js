import React from 'react';
import {Route, Switch} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/Pages/HomePage/Home"

function App() {
    return (
        <div className="App">
            <Router>
              <Switch>
                <Route path = '/' component = {Home} />
              </Switch>
            </Router>
        </div>
    )
}

export default App
