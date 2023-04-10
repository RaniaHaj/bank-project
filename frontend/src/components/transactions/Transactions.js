import './Transactions.css'
import Transaction from '../transaction/Transaction.js'
import { useState, useEffect } from 'react';
import axios from 'axios'
import consts from "../../constants/consts"

export default function Transactions({updateBalance}) {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const getTransactions = () => {
        axios.get(`${consts.serverUrl}`)
        .then((transactions) => setTransactions(transactions.data))
    }
    getTransactions()
}, [transactions])

    return (
      <div className='allTransactions'>
        {transactions.map((transaction) => (<Transaction key={transaction._id} transaction={transaction} updateBalance={updateBalance} />))}
      </div>
    );
  };