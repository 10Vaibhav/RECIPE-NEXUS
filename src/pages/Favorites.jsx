import { useContext } from "react";
import { GlobalContext } from "../Context/index.jsx"
import RecipeItem from "../Components/RecipeItem.jsx";

export default function Favorites(){
    const {FavoriteList} = useContext(GlobalContext);

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Favorite Recipes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {FavoriteList && FavoriteList.length > 0 ? (
                    FavoriteList.map((item) => <RecipeItem key={item.id} item={item}/>)
                ) : (
                    <div className="col-span-full text-center py-20">
                        <div className="w-24 h-24 mx-auto mb-6 text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">No Favorites Yet</h2>
                        <p className="text-gray-600">Start adding your favorite recipes to see them here!</p>
                    </div>
                )}
            </div>
        </div>
    )
}
