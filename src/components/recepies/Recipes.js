import { Link } from "react-router-dom";

const Recipes = ({recipe:{idMeal,strMealThumb, strMeal, strArea }}) => {   

    return (
           <>        
                <div
                  className="uk-card" >
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img className="uk-border-rounded-medium" src={strMealThumb} alt="Course Title" />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    {/* <div className="uk-position-xsmall uk-position-top-right">
                      <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart">
                      </a>
                    </div> */}
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">{strMeal}</h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                        <span className="uk-margin-xsmall-left">4.7</span>
                        <span>(68)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">{strArea}</div>
                    </div>
                  </div>
                  <Link to={`/recipe/${idMeal}`} className="uk-position-cover"></Link>
                </div>
            
            {/* <Pagination/> */}

            </>
                 
     );
    
}
 
export default Recipes;