import React from 'react';
import './App.css';
import NavBar from "./component/Navbar";
import Logic from "./component/Logic";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import PuzzlePractice from "./component/PuzzlePractice";

let App =() =>  {
  return (
    <React.Fragment>
        <Router>
            <NavBar/>

            <Switch>
                <Route exact path = "/" component={Logic}/>
                <Route exact path = "/puzzle-practice" component={PuzzlePractice}/>
            </Switch>
        </Router>


    </React.Fragment>
  );
};

export default App;
