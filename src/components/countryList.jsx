import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Country from './country';
import { useSelector, useDispatch } from 'react-redux';
import { showCountryList, showCountryListFilterName, showCountryListFilterRegion } from '../actions/countryAction';

const CountryListStyled = styled.div`
    display:grid;
    grid-row-gap: 2.3em;
    justify-content: center;
    background: var(--background);
    padding: 4em 2em;
    border: 1px solid red;
`;

function CountryList() {

    const countryListByName = useSelector(state => state.country.countryListByName)

    const CountryList = useSelector((state) =>{
        if(countryListByName.length > 0){
            return state.country.countryListByName
        }
        return state.country.countryList
    })

    //console.log(country);
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
   
    const onChangeCountry = (e) => {
        dispatch( showCountryListFilterName(e.target.value) ) 
    }

    const onChangeRegion = (e) => {
        dispatch( showCountryListFilterRegion(e.target.value) )
    }

    return (
        <CountryListStyled>
            <form
                //onSubmit={contrySearch}
            >
                <input 
                    type="text"
                    name="countryName" 
                    onChange={onChangeCountry}
                />
                <input type="submit" value="buscar"/>
            </form>
            <select name="countryRegion" onChange={onChangeRegion}>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Europe">Europa</option>
                <option value="Africa">Africa</option>
            </select>

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