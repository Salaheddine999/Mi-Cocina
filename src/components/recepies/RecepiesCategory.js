import { useContext, useEffect, useRef, useState } from "react";
import RecepiesContext from "../../context/RecepiesContext";

const RecepiesCategory = () => {

    const[categories, setCategories] = useState(null);
    const[countries, setCountries] = useState(null)

    const {showRecipes, showRecipesbycountry} = useContext(RecepiesContext)

    //Fetching Categories
    useEffect((name)=>{
        fetch('https://themealdb.com/api/json/v1/1/categories.php')
        .then((response) => response.json())
        .then((data) => {
            setCategories(data)
            //console.log(data)
        });

        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then((response) => response.json())
        .then((data) => {
            setCountries(data)
            //console.log(data)
        });
    },[])

    
    const handleShow =(catName)=>{
        showRecipes(catName)      
    }

    const handleCountries = (countName) =>{
        showRecipesbycountry(countName)
    }

    return ( 
        <div>
            <ul className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top" data-uk-nav>
                <li className="uk-parent uk-open">
                    <a>Meal Categories</a>
                    <ul className="uk-nav-sub">
                        {categories&& categories.categories.map((category)=>(
                            <li key={category.idCategory}>
                                <a onClick={()=>handleShow(category.strCategory)}> {category.strCategory} </a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="uk-parent">
                    <a >World Cuisine</a>
                    <ul className="uk-nav-sub">
                        {countries && countries.meals.map((country)=>(
                            <li key={country.idMeal}>
                                <a onClick={()=>handleCountries(country.strArea)}>{country.strArea}</a>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>            
        </div>
     );
}
 
export default RecepiesCategory;