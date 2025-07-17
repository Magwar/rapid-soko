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
                <span className="icon">🔍</span>
                <span className="icon">👤</span>
                <span className="icon">🛒</span>
            </div>
      </header>
  );
}

export default Header;
