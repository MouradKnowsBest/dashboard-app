import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DashboardContextProvider from './context/DashboardContext'
import "./App.css";


export default function App() {
  return (

    <DashboardContextProvider>
      <Router>

        <Sidebar />

        <Switch>
          <Route  path="/" exact component={DashboardFinance}/>
          <Route path="/DashboardEmployees" exact component={DashboardEmployees}/>
        </Switch>

      </Router>
    </DashboardContextProvider>

  );
}
