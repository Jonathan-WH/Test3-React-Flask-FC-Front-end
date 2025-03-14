import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Products() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState(""); // ✅ Nouveau filtre pour le tri
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Charger les catégories et les produits initiaux depuis l'API Flask
    useEffect(() => {
        axios.get("http://127.0.0.1:5000/products")
            .then(response => {
                const allCategories = [...new Set(response.data.products.map(p => p.category))];
                setCategories(allCategories);
                setFilteredProducts(response.data.products);
            })
            .catch(error => console.error("Erreur API:", error));
    }, []);

    // Fonction pour appliquer les filtres avec l'API Flask
    const applyFilters = () => {
        let url = `http://127.0.0.1:5000/products?`;

        if (selectedCategory) url += `category=${selectedCategory}&`;
        if (sortBy) url += `sort_by=${sortBy}`;

        axios.get(url)
            .then(response => {
                setFilteredProducts(response.data.products);
            })
            .catch(error => console.error("Erreur API:", error));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Nos Produits</h1>

            {/* Formulaire de filtre */}
            <div className="row mb-4">
                {/* Filtre Catégorie */}
                <div className="col-md-6">
                    <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">Toutes les catégories</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Filtre Tri */}
                <div className="col-md-6">
                    <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="">Trier par</option>
                        <option value="price_asc">Prix croissant</option>
                        <option value="price_desc">Prix décroissant</option>
                        <option value="name_asc">Nom (A → Z)</option>
                        <option value="name_desc">Nom (Z → A)</option>
                    </select>
                </div>
            </div>

            {/* Bouton Valider */}
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <button className="btn btn-primary" onClick={applyFilters}>Appliquer les filtres</button>
                </div>
            </div>

            {/* Liste des produits */}
            <div className="row">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => <ProductCard key={product.id} product={product} />)
                ) : (
                    <p className="text-center">Aucun produit trouvé.</p>
                )}
            </div>
        </div>
    );
}

export default Products;