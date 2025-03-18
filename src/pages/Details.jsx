import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../Context/index.jsx";

export default function Details(){
    const {id} = useParams();
    const {recipeDetailsData, setRecipeDetailsData, handleAddToFavorite, FavoriteList} = useContext(GlobalContext);

    useEffect(()=> {
        async function getRecipeDetails(){
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await response.json();
            if(data?.data){
                setRecipeDetailsData(data?.data);
            }
        }
        getRecipeDetails()
    },[])

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="lg:order-2">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={recipeDetailsData?.recipe?.image_url}
                            alt={recipeDetailsData?.recipe?.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                </div>
                <div className="lg:order-1 space-y-8">
                    <div>
                        <span className="text-sm text-red-500 font-medium tracking-wide">{recipeDetailsData?.recipe?.publisher}</span>
                        <h1 className="text-4xl font-bold text-gray-800 mt-2 mb-4">{recipeDetailsData?.recipe?.title}</h1>
                        <button 
                            onClick={()=> handleAddToFavorite(recipeDetailsData?.recipe)} 
                            className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            {FavoriteList && FavoriteList.length > 0 && FavoriteList.findIndex(item => item.id === recipeDetailsData?.recipe.id) !== -1 
                                ? "Remove from Favorites" 
                                : "Add to Favorites"}
                        </button>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ingredients</h2>
                        <ul className="space-y-3">
                            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    <span className="font-medium">{ingredient.quantity} {ingredient.unit}</span>
                                    <span>{ingredient.description}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
