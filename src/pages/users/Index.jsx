import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Tasks = () => {
  const [users, setUsers] = useState([]);


  const fetchUsers = async () => {
    try {
      const response = await fetch('https://aliakbar-fake-api.netlify.app/.netlify/functions/server/users'); 
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Ошибка при загрузке пользователей:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users">
      <div className="container">
        <header>
          <h1>Users</h1>
          <Link to="/newuser">
            <button>+ New User</button>
          </Link>
        </header>
        <hr />
        <main>
          <table className="table">
            <thead>
              <tr>
                <th>No:</th>
                <th>Name:</th>
                <th>Phone:</th>
                <th>Email:</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}.</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
        <hr />
      </div>
    </div>
  );
};

export default Tasks;
