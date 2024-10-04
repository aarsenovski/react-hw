import { useState } from "react";

const UserFetcher = () => {
  const [user, setUser] = useState(null);

  const fetchRandomUser = async () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${randomId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
      throw new Error("User cannot be retrieved now");
    }
  };

  return (
    <div className="random-user-fetcher">
      <button
        onClick={fetchRandomUser}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Get Random User
      </button>

      {user && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "20px",
          }}
        >
          <h1>User Information</h1>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>City:</strong> {user.address.city}
          </p>
          <p>
            <strong>Phone Number:</strong> {user.phone}
          </p>
          <p>
            <strong>Company Name:</strong> {user.company.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserFetcher;
