import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "../recepies/Ingredients";
import RecepiesContext from "../../context/RecepiesContext";
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from "react-share";

const Recipe = () => {

    const{recipe, getRecipe} = useContext(RecepiesContext)
    const params = useParams()
    useEffect(()=>{
        getRecipe(params)
    },[])
    

    return ( 
        <>
            {recipe && recipe.meals.map(meal=>(
            <div key={meal.idMeal}>
            <div className="uk-container" >
                <div data-uk-grid>
                    <div className="uk-width-1-2@s">
                    <div><img className="uk-border-rounded-large" src={meal.strMealThumb} alt="Image alt"/></div>
                    </div>
                    <div className="uk-width-expand@s uk-flex uk-flex-middle">
                    <div>
                        <h1>{meal.strMeal}</h1>
                        
                        <div className="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider" data-uk-grid>
                        <div>
                            <span data-uk-icon="icon: clock; ratio: 1.4"></span>
                            <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Active Time</h5>
                            <span className="uk-text-small">20 mins</span>
                        </div>
                        <div>
                            <span data-uk-icon="icon: future; ratio: 1.4"></span>
                            <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Total Time</h5>
                            <span className="uk-text-small">50 mins</span>
                        </div>
                        <div>
                            <span data-uk-icon="icon: users; ratio: 1.4"></span>
                            <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Yield</h5>
                            <span className="uk-text-small">Serves 4</span>
                        </div>
                        </div>
                        <hr/>
                        <div data-uk-grid>
                        <div className="uk-width-auto@s uk-text-small">
                            <p className="uk-margin-small-top uk-margin-remove-bottom">Source: <a href={meal.strSource}>Click here</a></p>
                        </div>
                        <div className="uk-width-expand@s uk-flex uk-flex-middle uk-flex-right@s">
                            <a href="#" className="uk-icon-link" data-uk-icon="icon: plus-circle; ratio: 1.2" 
                            data-uk-tooltip="title: Save Recipe"></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="uk-section uk-section-default">
                <div className="uk-container uk-container-small">
                    <div className="uk-grid-large" data-uk-grid>
                    <div className="uk-width-expand@m">
                        <div className="uk-article">
                        <h3>How to Make It</h3>
                        <div id="step-1" className="uk-grid-small uk-margin-medium-top" data-uk-grid>
                            <div className="uk-width-expand">
                            <h5 className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary" data-uk-leader="fill:—">Instructions</h5>
                            <div className="uk-step-content">{meal.strInstructions}</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="uk-width-1-3@m">
                        <h3>Ingredients</h3>

                        <Ingredients meal={meal}/>

                        <h3 className="uk-margin-large-top">Tags</h3>
                        <div className="uk-margin-medium-top" data-uk-margin>
                        <a className="uk-display-inline-block" href="#"><span className="uk-label uk-label-light">{meal.strTags ? meal.strTags: 'No tags' }</span></a>       
                        </div>
                        <h3 className="uk-margin-large-top">Share Recipe</h3>
                        <div className="uk-margin-medium-top">
                        <div data-uk-grid className="uk-child-width-auto uk-grid-small">
                            <div>
                                <FacebookShareButton url={meal.strSource}>
                                    <FacebookIcon className="uk-icon-button"/>
                                </FacebookShareButton>
                            </div>
                            <div>
                                <TwitterShareButton url={meal.strSource}>
                                    <TwitterIcon className="uk-icon-button"/>
                                </TwitterShareButton>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                </div>
                ))}    
 
        </>   
     );
}
 
export default Recipe;