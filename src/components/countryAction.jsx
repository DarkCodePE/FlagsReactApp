import React, { useState, useEffect } from 'react'
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
    const [country, setCountry] = useState({
        countryName:'',
        countryRegion:'',
    })
    
    const dispatch = useDispatch()

    const {countryName, countryRegion} = country

    useEffect(() => {
        if(countryName != ''){
            dispatch( showCountryListFilterName(country) ) 
        }
        if(countryRegion != ''){
            dispatch( showCountryListFilterRegion(country) ) 
        } 
    }, [country])

    const onChangeCountry = (e) => {
        setCountry({
            ...country,
            [e.target.name] : e.target.value
        })
    }
    return (
        <CountryActionStyled>
            <CountrySearch placeholder="Search for a country" name="countryName" onChange={onChangeCountry} />
            <CountryRegion name="countryRegion" onChange={onChangeCountry} />
        </CountryActionStyled>
    );
}
 
export default CountryAction;