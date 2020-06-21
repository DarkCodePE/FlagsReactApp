import React, { useEffect } from 'react';
import styled from 'styled-components';
import Country from './country';
import Country404 from './country404';
import { useSelector, useDispatch } from 'react-redux';
import { showCountryList } from '../actions/countryAction';
import { useHistory } from 'react-router-dom';

const CountryListStyled = styled.div`
    /* max-width: 1282px; */
    display:grid;
    grid-row-gap: 2.3em;
    /* grid-column-gap:80px; */
    grid-template-columns: repeat(auto-fill, 264px);
    justify-content: center;
    padding: 2em 2em;
    @media screen and (min-width: 768px) {
        justify-content: space-between;
    }
`;

function CountryList() {

    const countryListByName = useSelector(state => state.country.countryListByName)
    const countryFilterState = useSelector(state => state.country.countryState)
    //console.log(countryFilterState)

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

    const history = useHistory()

    const countryDetails = (name) => {
        history.push(`/country/${name}`)
    }

    return (
        <CountryListStyled>
            {
                countryFilterState === true  && countryListByName.length === 0  
                ? 
                <Country404 /> 
                :
                CountryList.map(({ name, flag, population, region, capital }) => {
                    return(
                        <div key={name} onClick={() => countryDetails(name)}>
                            <Country 
                                key={name}
                                flag={flag}
                                name={name}
                                population={population}
                                region={region}
                                capital={capital}
                            /> 
                        </div>
                    )
                })
            }
        </CountryListStyled>
    );
}

export default CountryList;