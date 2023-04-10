import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Transactions from "./components/transactions/Transactions.js";
import { useEffect, useState } from "react";
import axios from 'axios'
import Operations from "./components/operations/Operations";
import Breakdown from "./components/breakdown/Breakdown";
import consts from "./constants/consts"

function App() {
  const [balance, setBalance] = useState(consts.startingBalance)

  const updateBalance = () => {
    axios.get(`${consts.serverUrl}/balance`)
    .then((balance) => {
      setBalance(balance.data.total)
    })
  }

  useEffect(() => {
    updateBalance()
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar balance={balance} />
        <Routes>
          <Route path="/" element={<Transactions updateBalance={updateBalance} />} />
          <Route path="/operations" element={<Operations updateBalance={updateBalance} />} />
          <Route path="/breakdown" element={<Breakdown />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
