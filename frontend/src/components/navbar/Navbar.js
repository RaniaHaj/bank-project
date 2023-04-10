import "./Navbar.css";
import { Link } from "react-router-dom";
import consts from "../../constants/consts"

export default function Navbar({balance}) {
  return (
    <div className="navbar">
      <div className={"balance"}>Balance: &nbsp;<b className={balance < consts.minBalance ? "red-n" : "green-n"}>{balance}</b> </div>
      <div className="items">
        <div className="navbar_items">
          <Link to={'/'}>Transactions</Link>
        </div>
        <div className="navbar_items">
          <Link to={'/operations'}>Operations</Link>
        </div>
        <div className="navbar_items">
          <Link to={'/breakdown'}>Breakdown</Link>
        </div>
      </div>
    </div>
  );
};


