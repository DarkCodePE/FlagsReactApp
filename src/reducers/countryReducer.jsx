import { COUNTRY_LIST, COUNTRY_LIST_BY_NAME, COUNTRY_LIST_BY_REGION } from "../types";

const initialState = {
    countryListByName:[],
    countryListByRegion:[],
    countryList: [],
}
export default function(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case COUNTRY_LIST:
            return {
                ...state,
                countryList: action.payload
            }
        case COUNTRY_LIST_BY_NAME:
            return {
                ...state,
                countryListByName: state.countryList.filter( 
                    country => country.name.toLowerCase().includes(action.payload.toLowerCase())
                ),
            }
        case COUNTRY_LIST_BY_REGION:
            return {
                ...state,
                countryListByName: state.countryList.filter( 
                    country => country.region.toLowerCase().includes(action.payload.toLowerCase())
                ),
            }    
        default:
            return state;
    }
}