import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import './App.css'
import { BrowserRouter as Router, 
  Route, 
  Routes
}from "react-router-dom"
import DriverDetails from './pages/DriverDetails/driverDetails.js'
import Contracts from './pages/contracts/Contracts.js'
import Transactions from './pages/transactions/Transactions'
import Reports from './pages/reports/Reports'

function App() {
  return (
    <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route index element={
              <DriverDetails />
            }>
            </Route>
            <Route path="/drivers" element={
              <DriverDetails />
            }>
            </Route>
           
            <Route path="/contracts" element={
              <Contracts />
            }>
            </Route>

            <Route path="/transactions" element={
              <Transactions />
            }>
            </Route>

            <Route path="/reports" element={
              <Reports />
            }>
            </Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
