import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [FavoriteList, setFavoriteList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate('/');
      }

      // console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorite(getCurrentItem){
      console.log(getCurrentItem)
      let cpyFavoritesList = [...FavoriteList];

      const index = cpyFavoritesList.findIndex((item)=> item.id === getCurrentItem.id);

      if(index === -1){
        cpyFavoritesList.push(getCurrentItem);
      }else{
        cpyFavoritesList.splice(index,1);
      }

      setFavoriteList(cpyFavoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        setFavoriteList,
        FavoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
