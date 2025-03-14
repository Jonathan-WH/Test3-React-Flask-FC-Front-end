import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/products")
            .then(response => {
                const allCategories = [...new Set(response.data.products.map(p => p.category))];
                setCategories(allCategories);
            })
            .catch(error => console.error("Erreur API:", error));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Nos Catégories</h1>
            <div className="row">
                {categories.map((category, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">{category}</h5>
                                <Link to={`/category/${category}`} className="btn btn-primary">Voir les produits</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;