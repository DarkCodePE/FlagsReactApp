import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Country from './country';
const CountryListStyled = styled.div`
    display:grid;
    grid-row-gap: 2.3em;
    justify-content: center;
    background: var(--background);
    padding: 4em 2em;
    border: 1px solid red;
`;

const CountrySearch = () => {
    const countryListByName = useSelector(state => state.country.countryListByName)
    return (
        <CountryListStyled>
            {
                countryListByName.map(({ name, flag, population, region, capital}) => {
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
 
export default CountrySearch;