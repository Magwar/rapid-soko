import React from "react";

function Header() {
    return (
      <header className="header">
        <div className="header-left">
          <div className="logo">Rapid Soko</div>
        </div>

        <nav className="header-nav">
          <ul>
            <li>Shop</li>
            <li>Offers</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="header-right">
          <span className="icon">🔍 Search</span>
          <span className="icon">👤 Login</span>
          <span className="icon">🛒 Cart</span>
        </div>
      </header>
    );
}

export default Header;
