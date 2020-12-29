import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import Navigatiom from './components/Navigation';
import List from './components/List';
import Favorite from './components/Favorite'

function App() {
    return (
        <Router>
            <Navigatiom />
            <Route path='/' exact component={List}/>
            <Route path='/favorite' component={Favorite}/>
        </Router>
    )
}

export default App;