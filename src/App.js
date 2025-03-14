import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import Favorites from "./pages/Favorites";

function App() {
    return (
        <Router>
            <Navbar /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </Router>
    );
}

export default App;