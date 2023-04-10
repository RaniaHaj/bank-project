import { useEffect, useState } from "react";
import "./Breakdown.css";
import axios from "axios";
import consts from "../../constants/consts"

export default function Breakdown() {
  const [breakdown, setBreakdown] = useState([]);

  useEffect(() => {
    axios.get(`${consts.serverUrl}/Breakdown`).then((breakdown) => {
      setBreakdown(breakdown.data);
    });
  }, []);

  return (
    <div className="breakdown">
      <label className="insertLabel">Breakdown</label>
      {breakdown.map((breakdown, i) => (
        <div key={i} className="category">
          <label>{breakdown._id}: {breakdown.total}</label>
        </div>
      ))}
    </div>
  );
}
