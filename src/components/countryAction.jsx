import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {showCountryListFilterName, showCountryListFilterRegion } from '../actions/countryAction';
import CountrySearch from './countrySearch';
import CountryRegion from './countryRegion';

const CountryActionStyled = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 40px;
    padding: 0 1rem;
`;

const CountryAction = () => {
    const dispatch = useDispatch()

    const onChangeCountry = (e) => {
        dispatch( showCountryListFilterName(e.target.value) ) 
    }

    const onChangeRegion = (e) => {
        dispatch( showCountryListFilterRegion(e.target.value) )
    }
    return (
        <CountryActionStyled>
            <CountrySearch placeholder="Search for a country" name="countryName" onChange={onChangeCountry} />
            <CountryRegion name="countryRegion" onChange={onChangeRegion} />
        </CountryActionStyled>
    );
}
 
export default CountryAction;