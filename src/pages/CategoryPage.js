import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function CategoryPage() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/products?category=${category}`)
            .then(response => setProducts(response.data.products))
            .catch(error => console.error("Erreur API:", error));
    }, [category]);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Produits dans la catégorie "{category}"</h1>
            <div className="row">
                {products.length > 0 ? (
                    products.map(product => <ProductCard key={product.id} product={product} />)
                ) : (
                    <p className="text-center">Chargement.</p>
                )}
            </div>
        </div>
    );
}

export default CategoryPage;