import { useContext, useEffect, useState } from "react";
import RecepiesContext from "../../context/RecepiesContext";
import Recipes from "./Recipes";

const RecipeItem = () => {

    const{recipes, getMeals} = useContext(RecepiesContext)
    
    useEffect(()=>{
      getMeals()
    },[])
    
    return ( 
        
        <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
            {recipes && recipes.meals.slice(0,9).map(recipe=>(  
                <Recipes key={recipe.idMeal} recipe={recipe}/>
            ))}
        </div>
        
     );
}
 
export default RecipeItem;