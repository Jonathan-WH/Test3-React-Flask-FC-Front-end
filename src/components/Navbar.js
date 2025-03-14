import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Boutique</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Produits</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Catégories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorites">Favoris</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;