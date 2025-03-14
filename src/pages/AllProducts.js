import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/products")
            .then(response => setProducts(response.data.products))
            .catch(error => console.error("Erreur API:", error));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Tous les Produits</h1>
            <div className="row">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default AllProducts;