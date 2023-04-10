import "./Transaction.css";
import axios from 'axios'
import consts from "../../constants/consts"
export default function Transaction({ transaction, updateBalance}) {


  const deleteTransaction = () => {
    axios.delete(`${consts.serverUrl}/${transaction._id}`)
    .then((transaction) => {
      updateBalance()
    })
  }

  return (
    <div className="item">
      <div className="itemRight">
        <h3>{transaction.vendor}</h3>
        <h2>{transaction.category}</h2>
      </div>
      <div className="itemLeft">
        <h3 className={transaction.amount < 0 ? "red-t" : "green-t"}>{transaction.amount}</h3>
        <button className="delete" onClick={deleteTransaction}>Delete</button>
      </div>
    </div>
  );
}
