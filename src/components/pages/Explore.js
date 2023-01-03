import RecepiesCategory from "../recepies/RecepiesCategory"
import RecipeItem from "../recepies/RecipeItem";
import Slider from "../layouts/Slider";
import { useContext, useState } from "react";
import RecepiesContext from "../../context/RecepiesContext";
import { toast } from "react-toastify";

const Explore = () => {
    
    const[text, setText] = useState('')
    const{searchRecipes} = useContext(RecepiesContext)

    const handleSubmit = (e) =>{
        e.preventDefault()

        try {
            searchRecipes(text)
            setText('')
        } catch (error) {
            toast.error('Something went wrong')
        }
    }

    return (  
        <>
            <Slider/>

            <div className="uk-section uk-section-default">
            <div className="uk-container">
                <div data-uk-grid>
                <div className="uk-width-1-4@m sticky-container">
                    <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
                    <h2>Recipes</h2>
                    <RecepiesCategory/>
                    </div>
                </div>
                <div className="uk-width-expand@m">
                    <div data-uk-grid>
                    <div className="uk-width-expand@m">
                        <form className="uk-search uk-search-default uk-width-1-1" onSubmit={handleSubmit}>
                            <span data-uk-search-icon></span>
                            <input value={text} onChange={(e)=>setText(e.target.value)} className="uk-search-input uk-text-small uk-border-rounded uk-form-large" type="search" placeholder="Search for recipes..." />
                        </form>          
                    </div>

                    </div>

                    <RecipeItem />
                    
                </div>
                </div>
            </div>
            </div>

        </>
        
    );
}
 
export default Explore;