import { Link } from "react-router-dom"

export default function RecipeItem({item}){
    return <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
            <img 
                src={item?.image_url} 
                alt={item?.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
            <span className="text-sm text-red-500 font-medium tracking-wide">{item?.publisher}</span>
            <h3 className="font-bold text-xl text-gray-800 mt-2 mb-4 line-clamp-2">{item?.title}</h3>
            <Link 
                to={`/recipe-item/${item?.id}`}
                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
                View Recipe
            </Link>
        </div>
    </div>
}
