const RecepiesReducer = (state, action)=>{

    switch (action.type){
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload
            }
        
        case 'GET_MEALS':
            return {
                ...state,
                recipes: action.payload
            }

        case 'SEARCH_RECIPES':
            return {
                ...state,
                recipes: action.payload
            }    
        
        case 'GET_RECIPES_BYCOUNTRY':
            return {
                ...state,
                recipes: action.payload
            }
        
        case 'GET_RECIPE':
            return {
                ...state,
                recipe: action.payload
            }

        case 'RANDOM_RECIPE':
            return {
                ...state,
                recipe: action.payload
            }
        default:
            return state
    }
    
}

export default RecepiesReducer