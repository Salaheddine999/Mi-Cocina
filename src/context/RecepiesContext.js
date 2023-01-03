import { createContext, useReducer } from "react";
import RecepiesReducer from "./RecepiesReducer";
import { toast } from "react-toastify";


const RecepiesContext = createContext()


export const RecepiesProvider = ({children}) =>{

    const initialState = {
        recipes: null,
        recipe: null
    }

    const[state, dispatch] = useReducer(RecepiesReducer, initialState)

    //Get default recipes
    const getMeals = () =>{
        fetch(`https://themealdb.com/api/json/v1/1/search.php?s=beef`)
        .then((response) => response.json())
        .then((items) => {
            dispatch({
                type: 'GET_MEALS',
                payload : items,
            })    
        });
    }

    //Show Recepies
    const showRecipes = (catName)=>{
        fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${catName} `)
        .then((response) => response.json())
        .then((items) => {
            dispatch({
                type: 'GET_RECIPES',
                payload : items,
            })
            
        });
    }

    //Search recipes
    const searchRecipes = async (text) =>{
        if (text==='') {
            toast.error('Please enter something')
        } else {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
            const items = await response.json()
            if (items.meals === null) {
                toast.error('Recipe does not exist')
            } else {
                dispatch({
                    type: 'SEARCH_RECIPES',
                    payload : items,
                })  
            }          
        }

    }

    //Search Recipes by country
    const showRecipesbycountry = (countName) =>{
        fetch(`https://themealdb.com/api/json/v1/1/filter.php?a=${countName}`)
        .then((response) => response.json())
        .then((items) => {
            dispatch({
                type: 'GET_RECIPES_BYCOUNTRY',
                payload : items,
            })
            
        });
    }

    //Get Recipe
    const getRecipe = (idMeal) =>{
        fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal.id}`)
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: 'GET_RECIPE',
                payload : data,
            })
            //console.log(data)
        });
    }

    //Get Random Meal
    const Random = () =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((response) => response.json())
        .then((data) => {
            dispatch({
                type: 'RANDOM_RECIPE',
                payload : data,
            })
            //console.log(data)
        });
    }

    return <RecepiesContext.Provider
            value={{
                recipes: state.recipes,
                recipe: state.recipe,
                showRecipes,
                getMeals,
                searchRecipes,
                showRecipesbycountry,
                getRecipe,
                Random
            }}
            >
            {children}

           </RecepiesContext.Provider>


}

export default RecepiesContext;