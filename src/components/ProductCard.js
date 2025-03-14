import React, { useState, useEffect } from "react";

function ProductCard({ product }) {
    const [isFavorite, setIsFavorite] = useState(false);

    // Vérifier si le produit est déjà en favori au chargement
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(favorites.some(fav => fav.id === product.id));
    }, [product.id]);

    // Ajouter / Retirer des favoris
    const toggleFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (isFavorite) {
            favorites = favorites.filter(fav => fav.id !== product.id);
        } else {
            favorites.push(product);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="text-primary"><strong>{product.price}€</strong></p>
                    <button
                        className={`btn ${isFavorite ? "btn-danger" : "btn-outline-danger"}`}
                        onClick={toggleFavorite}
                    >
                        {isFavorite ? "❤️ Retirer des favoris" : "🤍 Ajouter aux favoris"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;