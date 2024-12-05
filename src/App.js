import React, { useState } from "react";
import Login from "./components/Login";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [role, setRole] = useState(null);

  const handleLogin = (email, password) => {
    const userCredentials = { email: "neovern@gail.com", password: "qweqwe123", role: "user" };
    const adminCredentials = { email: "neovern07@gail.com", password: "qweqwe123", role: "admin" };

    if (email === userCredentials.email && password === userCredentials.password) {
      setRole(userCredentials.role);
    } else if (email === adminCredentials.email && password === adminCredentials.password) {
      setRole(adminCredentials.role);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => setRole(null);

  return (
    <div>
      {!role && <Login onLogin={handleLogin} />}
      {role === "user" && <UserDashboard onLogout={handleLogout} />}
      {role === "admin" && <AdminDashboard onLogout={handleLogout} />}
    </div>
  );
}

export default App;
