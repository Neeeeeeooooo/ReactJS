import React from "react";
import "./AdminDashboard.css";

function AdminDashboard({ onLogout }) {
  return (
    <div className="admin-container">
      <h2>Welcome, Admin!</h2>
      <p>This is the admin interface.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
