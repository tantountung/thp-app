import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <a
      className="navbar-brand"
      href="../components/home/App.jsx"
      >
      Home
    </a>

    <ul className="navbar-nav">
      <li className="nav-item">
        <a
          className="nav-link"
          href="../components/rooms/RoomApp.jsx">
          Rooms
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="../components/tenants/TenantApp.jsx"
          >
          Tenants
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="../components/housekeepers/HousekeeperApp.jsx"
          >
          Housekeepers
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="../components/contracts/ContractApp.jsx"
          >
          Contracts
        </a>
      </li>
      
    </ul>
  </nav>
  );
};

export default Header;
