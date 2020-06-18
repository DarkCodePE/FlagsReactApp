import React from 'react'
import styled from 'styled-components'

const CountryRegionStyled = styled.select`
    padding: 1.3em;
    border: none;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, .05);
    outline: 0;
`;

const CountryRegion = ({...props}) => {
    return (
        <CountryRegionStyled {...props}>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europa</option>
            <option value="Africa">Africa</option>
        </CountryRegionStyled>
    );
}
 
export default CountryRegion;