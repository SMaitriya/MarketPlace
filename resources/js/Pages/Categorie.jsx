import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';

export default function Poster(props) {
    const { categories } = props; 
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedProductType, setSelectedProductType] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleProductTypeChange = (event) => {
        setSelectedProductType(event.target.value);
    };


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Choisir</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-bold mb-4">Choisir une catégorie :</h3>
                            <select
                                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                onChange={handleCategoryChange}
                                value={selectedCategory}
                            >
                                <option value="">Sélectionner une catégorie</option>
                                {categories.map(categorie => (
                                <option key={categorie.id} value={categorie.nom}>{categorie.nom}</option>
                                  ))}
                            </select>
                            {selectedCategory && (
                                <div className="mt-4">
                                    <h3 className="text-lg font-bold mb-4">Choisir un type de produit :</h3>
                                    <select
                                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                        onChange={handleProductTypeChange}
                                        value={selectedProductType}
                                    >
                                        <option value="">Sélectionner un type de produit</option>
                        
                                        {selectedCategory === categorie.id && (
                                            <>
                                                <option value="paints">Feuilles décor</option>
                                                <option value="floors">Meubles</option>
                                                <option value="sols">Sols</option>
                                                <option value="matières brut">Matières bruts</option>
                                                <option value="panneaux d'aggloméré">Panneaux d'aggloméré</option>
                                                <option value="autres">Autres</option>
                                            </>
                                        )}
                                        {selectedCategory === 'costumes' && (
                                            <>
                                                <option value="vetement">Vêtements</option>
                                                <option value="chaussure">Chaussures</option>
                                                <option value="textiles">Textiles</option>
                                            </>
                                        )}
                                        {selectedCategory === 'regie' && (
                                            <>
                                                <option value="roulante">Roulante</option>
                                                <option value="electromenager">Electromenager</option>
                                                <option value="protection">Protection</option>
                                                <option value="loges">Loges</option>
                                                <option value="adhesif">Adhesif</option>
                                                <option value="autremateriel">Autre matériel de tournage</option>
                                            </>
                                        )}
                                        {selectedCategory === 'materiel' && (
                                            <>
                                                <option value="camera">Camera</option>
                                                <option value="machinerie">Machinerie</option>
                                                <option value="son">Son</option>
                                                <option value="sfx">SFX</option>
                                                <option value="electricite">Electricité</option>
                                                <option value="autre">Autres</option>
                                            </>
                                        )}
                                       
                                        </select>
                                    
                                  
                                    <div className="mt-4">
                                        <button
                                         
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            style={{ marginBottom: '20px' }}
                                        >
                                            Valider
                                        </button>
                                    </div>
                                </div>
                                
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

