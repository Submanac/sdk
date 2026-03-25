import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/markets")
      .then(res => setMarkets(res.data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Submanac Markets</h1>
      {markets.map((m) => (
        <div key={m.id} style={{ border: "1px solid #ccc", padding: 20, marginTop: 10 }}>
          <h3>{m.title}</h3>
          <p>Yes: {m.yes}% | No: {m.no}%</p>
        </div>
      ))}
    </div>
  );
}
