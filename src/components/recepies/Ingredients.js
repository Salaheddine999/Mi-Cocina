const Ingredients = ({meal}) => {

    return ( 
        <>
            <ul className="uk-list uk-list-large uk-list-divider uk-margin-medium-top">
                {meal.strMeasure1 === " " || meal.strMeasure1 ===null ? '':<li>{meal.strMeasure1} {meal.strIngredient1}</li>}
                {meal.strMeasure2 === " " || meal.strMeasure2 ===null ? '':<li>{meal.strMeasure2} {meal.strIngredient2}</li>}
                {meal.strMeasure3 === " " || meal.strMeasure3 ===null ? '':<li>{meal.strMeasure3} {meal.strIngredient3}</li>}
                {meal.strMeasure4 === " " || meal.strMeasure4 ===null ? '':<li>{meal.strMeasure4} {meal.strIngredient4}</li>}
                {meal.strMeasure5 === " " || meal.strMeasure5 ===null ? '':<li>{meal.strMeasure5} {meal.strIngredient5}</li>}
                {meal.strMeasure6 === " " || meal.strMeasure6 ===null ? '':<li>{meal.strMeasure6} {meal.strIngredient6}</li>}
                {meal.strMeasure7 === " " || meal.strMeasure7 ===null ? '':<li>{meal.strMeasure7} {meal.strIngredient7}</li>}
                {meal.strMeasure8 === " " || meal.strMeasure8 ===null ? '':<li>{meal.strMeasure8} {meal.strIngredient8}</li>}
                {meal.strMeasure9 === " " || meal.strMeasure9 ===null ? '':<li>{meal.strMeasure9} {meal.strIngredient9}</li>}
                {meal.strMeasure10 === " " || meal.strMeasure10 ===null ? '':<li>{meal.strMeasure10} {meal.strIngredient10}</li>}
                {meal.strMeasure11 === " " || meal.strMeasure11 ===null ? '':<li>{meal.strMeasure11} {meal.strIngredient11}</li>}
                {meal.strMeasure12 === " " || meal.strMeasure12 ===null ? '':<li>{meal.strMeasure12} {meal.strIngredient12}</li>}
                {meal.strMeasure13 === " " || meal.strMeasure13 ===null ? '':<li>{meal.strMeasure13} {meal.strIngredient13}</li>}
                {meal.strMeasure14 === " " || meal.strMeasure14 ===null ? '':<li>{meal.strMeasure14} {meal.strIngredient14}</li>}
                {meal.strMeasure15 === " " || meal.strMeasure15 ===null ? '':<li>{meal.strMeasure15} {meal.strIngredient15}</li>}
                {meal.strMeasure16 === " " || meal.strMeasure16 ===null ? '':<li>{meal.strMeasure16} {meal.strIngredient16}</li>}
                {meal.strMeasure17 === " " || meal.strMeasure17 ===null ? '':<li>{meal.strMeasure17} {meal.strIngredient17}</li>}
                {meal.strMeasure18 === " " || meal.strMeasure18 ===null ? '':<li>{meal.strMeasure18} {meal.strIngredient18}</li>}
                {meal.strMeasure19 === " " || meal.strMeasure19 ===null ? '':<li>{meal.strMeasure19} {meal.strIngredient19}</li>}
                {meal.strMeasure20 === " " || meal.strMeasure20 ===null ? '':<li>{meal.strMeasure20} {meal.strIngredient20}</li>}
            </ul>            
        </>
     );
}
 
export default Ingredients;