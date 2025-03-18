import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context/index.jsx";

export default function Navbar(){
    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);

    // console.log(searchParam);

    return <nav className="bg-gradient-to-r from-red-500 to-orange-500 shadow-lg">
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <h2 className="text-3xl font-bold text-white hover:text-gray-100 transition-colors duration-300">
                    <NavLink to={'/'}>Recipe Nexus</NavLink>
                </h2>
                <form onSubmit={handleSubmit} className="w-full lg:w-auto">
                    <input
                        type="text"
                        name="search"
                        value={searchParam}
                        onChange={(event)=> setSearchParam(event.target.value)}
                        placeholder="Search for recipes..."
                        className="w-full lg:w-96 px-6 py-3 rounded-full outline-none shadow-lg focus:ring-2 focus:ring-red-300 transition-all duration-300 bg-white/90 backdrop-blur-sm"
                    />
                </form>
                <ul className="flex gap-8">
                    <li>
                        <NavLink to={'/'} className={({isActive}) => 
                            `text-white font-semibold hover:text-gray-100 transition-colors duration-300 ${isActive ? 'border-b-2 border-white' : ''}`
                        }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/favorites'} className={({isActive}) => 
                            `text-white font-semibold hover:text-gray-100 transition-colors duration-300 ${isActive ? 'border-b-2 border-white' : ''}`
                        }>Favorites</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}