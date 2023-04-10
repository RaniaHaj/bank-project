import { useState } from "react";
import "./Operations.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import consts from "../../constants/consts"

export default function Operations({updateBalance}) {
    const [amount, setAmount] = useState("")
    const [vendor, setVendor] = useState("")
    const [category, setCategory] = useState("")
    const navigate = useNavigate()

    const handleAmount = (event) => {
        setAmount(event.target.value)
    }

    const handleVendor = (event) => {
        setVendor(event.target.value)
    }

    const handleCategory = (event) => {
        setCategory(event.target.value)
    }

    const addTransaction = () => {
        axios.post(`${consts.serverUrl}/Transaction`, {
            amount: amount,
            vendor: vendor,
            category: category
        }).then((Transaction) => {
            updateBalance()
            navigate('/')
        })
    }


  return (
    <div className="addTransactionContainer">
        <label className="insertLabel">Insert Transactions</label>
        <input type="number" className="inputField" placeholder="Transaction amount" value={amount} onChange={handleAmount} />
        <input type="text" className="inputField" placeholder="Transaction vendor" value={vendor} onChange={handleVendor}/>
        <input type="text" className="inputField" placeholder="Transaction category" value={category} onChange={handleCategory}/>
        <div className="makeOperation">
            <button className="action deposit" onClick={addTransaction}>Deposit</button>
            <button className="action withdraw" onClick={addTransaction}>Withdraw</button>
        </div>
    </div>
  );
}
