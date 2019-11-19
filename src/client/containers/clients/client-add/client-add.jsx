import React, { useState } from 'react';

function ClientAddComponent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        You clicked
      </button>
    </div>
  );
}

export default ClientAddComponent;
