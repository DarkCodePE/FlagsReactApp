const { COUNTRY_LIST, COUNTRY_LIST_BY_NAME, COUNTRY_LIST_BY_REGION } = require("../types");

export function showCountryList(data){
    return (dispatch) => {
        dispatch( setCountryList(data) )
    }
}

const setCountryList = (data) => ({
    type:COUNTRY_LIST,
    payload: data
})

export function showCountryListFilterName(country){
    //console.log(country);
    return (dispatch) => {
        dispatch( setCountryListFilterName(country) )
    } 
}
const setCountryListFilterName = (country) => ({
    type:COUNTRY_LIST_BY_NAME,
    payload: country
})

export function showCountryListFilterRegion(region){
    return (dispatch) => {
        dispatch( setCountryListFilterRegion(region) )
    }
}
const setCountryListFilterRegion = (region) => ({
    type:COUNTRY_LIST_BY_REGION,
    payload: region
})