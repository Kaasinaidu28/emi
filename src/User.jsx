import React, { useState } from 'react';

const userDetails = "https://jsonplaceholder.typicode.com/posts";

const User = () => {
  const [user, setUser] = useState([]);

  const userHandler = async () => {
    try {
      const response = await fetch(userDetails);
      const newData = await response.json(); // Await the JSON conversion
      setUser(newData); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={userHandler}>Fetch Users</button>
      {user.map((item) => (
        <div key={item.id}>
          <h3 style={{color:"green"}}>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default User;


