import { useContext, useEffect, useState } from "react";
import RecepiesContext from "../../context/RecepiesContext";
import Recipes from "../recepies/Recipes";


const SearchRecipe = () => {

    const{getMeals, recipes, searchRecipes} = useContext(RecepiesContext)
    const[text, setText] = useState('')

    useEffect(()=>{
        getMeals()
    },[])

    const handleSearch = (e) =>{
        e.preventDefault()
        searchRecipes(text)
        setText('')
    }

    return (
        
        <div className="uk-container">
            <div data-uk-grid>
            <div className="uk-width-1-2@m">
                <form className="uk-search uk-search-default uk-width-1-1 uk-margin-small-bottom" onSubmit={handleSearch}>
                    <span data-uk-search-icon></span>
                    <input
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    className="uk-search-input uk-text-small uk-border-rounded uk-form-large" 
                    type="search" 
                    placeholder="Search for recipes..."
                    />
                </form>          
            </div>
            </div>
            <div className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top" data-uk-grid>
                
                    {recipes && recipes.meals.slice(0,12).map((recipe)=>(
                        <div>
                            <Recipes recipe={recipe}/>
                        </div>
                    ))}
                    
                
            </div>
        </div>
     );
}
 
export default SearchRecipe;