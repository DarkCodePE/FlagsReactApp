import React, { useEffect } from 'react';
import styled from 'styled-components';
import Country from './country';
import { useSelector, useDispatch } from 'react-redux';
import { showCountryList } from '../actions/countryAction';

const CountryListStyled = styled.div`
    display:grid;
    grid-row-gap: 2.3em;
    justify-content: center;
    padding: 4em 2em;
`;

function CountryList() {

    const countryListByName = useSelector(state => state.country.countryListByName)
    console.log(countryListByName)
    
    const CountryList = useSelector((state) =>{
        if(countryListByName.length > 0){
            return state.country.countryListByName
        }
        return state.country.countryList
    })

    const dispatch = useDispatch()

    useEffect(() => {
       const getCountry = async() => {
            const response = await fetch(`https://restcountries.eu/rest/v2/all`)
            const data = await response.json()
            //console.log(data)
            dispatch(showCountryList(data))
        }
        getCountry()
    }, [])
   
    return (
        <CountryListStyled>
            {
                CountryList.map(({ name, flag, population, region, capital }) => {
                    return(
                        <Country 
                            key={name}
                            flag={flag}
                            name={name}
                            population={population}
                            region={region}
                            capital={capital}
                        /> 
                    )
                })
            }
        </CountryListStyled>
    );
}

export default CountryList;