import React from 'react'
import styled from 'styled-components'

const CountrySearchStyled = styled.label`
    display:flex;
    background: var(--white);
    align-items: center;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, .05);
    padding: 0 2rem;
    border-radius: 5px;
    grid-column: span 2;
    i{
        margin-right: 1em;
        color: #c4c4c4
    }
    input{
        flex: 1;
        border: none;
        height: 48px;
        line-height: 48px;
        font-size: .7em;
        outline: 0;
        background: var(--white);
        &::-webkit-input-placeholder {
            color: #c4c4c4
        }
    }
    @media screen and (min-width: 768px) {
        grid-column: span 1;
    }
`;

const CountrySearch = ({...props}) => {
    return (
        <CountrySearchStyled>
            <i class="fas fa-search"></i>
            <input type="text" {...props} />
        </CountrySearchStyled>
    );
}
 
export default CountrySearch;