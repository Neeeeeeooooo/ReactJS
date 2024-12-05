import React from "react";
import "./UserDashboard.css";

function UserDashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <h2>Welcome, User!</h2>
      <p>This is the user interface.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserDashboard;
