import { useContext } from "react"
import { GlobalContext } from "../Context/index.jsx"
import RecipeItem from "../Components/RecipeItem.jsx";

export default function Home(){
    const {recipeList, loading} = useContext(GlobalContext);

    if(loading){
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-xl text-gray-600 font-medium">Loading recipes...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {recipeList && recipeList.length > 0 ? (
                    recipeList.map((item) => <RecipeItem key={item.id} item={item}/>)
                ) : (
                    <div className="col-span-full text-center py-20">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">No Recipes Found</h2>
                        <p className="text-gray-600">Try searching for your favorite recipes!</p>
                    </div>
                )}
            </div>
        </div>
    )
}