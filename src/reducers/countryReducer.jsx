import { COUNTRY_LIST, COUNTRY_LIST_BY_NAME, COUNTRY_LIST_BY_REGION } from "../types";

const initialState = {
    countryListByName:[],
    countryList: [],
    countryState: false,
}
export default function(state = initialState, action) {
    //debugger
    //console.log(action)
    //console.log(countryListByName)
    switch (action.type) {
        case COUNTRY_LIST:
            return {
                ...state, 
                countryList: action.payload
            }
        case COUNTRY_LIST_BY_NAME:
            return {
                ...state,
                countryState: true,
                countryListByName: state.countryList.filter( 
                    country => action.payload.countryRegion == '' ? country.name.toLowerCase().includes(action.payload.countryName.toLowerCase()) : country.name.toLowerCase().includes(action.payload.countryName.toLowerCase()) && action.payload.countryRegion.toLowerCase() === country.region.toLowerCase(),
                ),
            }
        case COUNTRY_LIST_BY_REGION:
            return {
                ...state,
                countryState: true,
                countryListByName: state.countryList.filter( 
                    country => action.payload.countryName == '' ? action.payload.countryRegion.toLowerCase() === country.region.toLowerCase() : country.name.toLowerCase().includes(action.payload.countryName.toLowerCase()) && action.payload.countryRegion.toLowerCase() === country.region.toLowerCase()
                ),
            }  
        default:
            return state;
    }
}