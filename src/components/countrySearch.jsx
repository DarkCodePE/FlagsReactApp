import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
const CountrySearchStyled = styled.div`
    input{
        width: 100%;
        border-radius: 5px;
        box-shadow: 0 2px 9px 0 rgba(0, 0, 0, .05);
        border: none;
        height: 48px;
        line-height: 48px;
        padding: 0 2rem;
        font-size: .7em;
        &::-webkit-input-placeholder {
            color: #c4c4c4
        }
    }
`;

const CountrySearch = ({...props}) => {
    return (
        <CountrySearchStyled>
            <input type="text" {...props} />
        </CountrySearchStyled>
    );
}
 
export default CountrySearch;