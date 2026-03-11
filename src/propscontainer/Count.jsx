import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded border-primary shadow mt-5" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h1>Counter App</h1>
      <h2  style={{ textAlign: "center" }}>{count}</h2>

      <button className="btn btn-success me-3" onClick={()=>setCount(count+1)}>+</button>
      <button className="btn btn-danger me-2" onClick={() => setCount(count - 1)} style={{ }}>-</button>
      <button className="btn btn-primary" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Count;
  