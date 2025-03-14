import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">⭐ Mes Produits Favoris</h1>
            <div className="row">
                {favorites.length > 0 ? (
                    favorites.map(product => <ProductCard key={product.id} product={product} />)
                ) : (
                    <p className="text-center">Aucun favori ajouté.</p>
                )}
            </div>
        </div>
    );
}

export default Favorites;