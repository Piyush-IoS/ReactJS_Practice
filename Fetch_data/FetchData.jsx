import { useState, useEffect } from "react";

function FetchData() {
  const [users, setUsers] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Fetch data from API when component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data"); // Handle HTTP errors
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data); // Store fetched users in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error.message); // Store error message
        setLoading(false);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Fetched Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "10px",
              margin: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
