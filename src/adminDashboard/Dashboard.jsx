import "./Dashboard.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";
import { useState } from "react";
function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="dashboard">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <Sidebar />
      </div>

      <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>
      <div className="main">
        <header className="navbar-admin">
          <AdminNav />
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
