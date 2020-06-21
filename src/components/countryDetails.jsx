import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { showCountryDetails } from '../actions/countryAction';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
const CountryDetailsStyled = styled.div`
    margin: 2em;
    a{
        text-decoration:none;
    }
    @media screen and (min-width: 768px) {
        margin: 4em 6em;
    }
`

const ButtonBackStyled =styled.button`
    cursor: pointer;
    border: 0;
    display: block;
    color: var(--black);
    background: var(--white);
    box-shadow: 0px 1px 4px 4px rgba(0,0,0,0.09);
    padding: .6em 2em;
    margin: 0 0 3em 0;
    .left{
        display: inline-flex;
        margin-right: 8px;
    }
`
const DescriptionStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 6em;
    font-size: 12px;
    grid-row-gap: 2em;
    figure{
        margin: 0;
    }
    img{
        width:100%
    }
    .description{
        display: grid;
        grid-template-columns: 1fr;
        text-align: left;
        align-items: center;
        grid-row-gap: 1em;
        h2{
            margin: 0;
        }
        p{
            margin: .5em 0;
        }
        span{
            font-weight: 700;
        }
    }
    .reference{
        p{
            font-weight: 700;
        }
        button{
            border:none;
            box-shadow: 0px 1px 4px 4px rgba(0,0,0,0.09);
            margin: .4em;
            padding: .4em 1.5em;
            background: var(--white);
            color: var(--black);
            font-size: 12px;
        }
    }
    @media screen and (min-width: 768px) {
        grid-template-columns: 480px 1fr;
        font-size: 1em;
        grid-row-gap: 0;
        .description{
            grid-template-columns: 1fr 1fr;
            align-items: start;
            grid-row-gap: 0;
        }
        h2{
            grid-column: span 2;
        }
        .reference{
            grid-column: span 2;
            p{
                margin:0;
            }
            button{
                margin: .5em;
                padding: .5em 1em;
                font-size: 1em;
            }
        }
    }
`
const CountryDetails = ({match}) => {

    const dispatch = useDispatch()
    const coutryName = match.params.id
    let location = useLocation();
    //console.log(location.pathname)
    useEffect(() => {
        const getCountryDetails = async() => {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${coutryName}`)
            const data = await response.json()
            dispatch(showCountryDetails(data[0]))
        }
        getCountryDetails()
    }, [location.pathname])

    const countryListByName = useSelector(state => state.country.countryListByName)
    const {
        flag,
        name, 
        nativeName, 
        population, 
        region, 
        subregion, 
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders
        } = countryListByName
        console.log(countryListByName);
    return (
        <CountryDetailsStyled>
            <Link to="/" >
                <ButtonBackStyled>
                    <span className="left"><i class="fas fa-arrow-left"></i></span>Back
                </ButtonBackStyled>
            </Link>
            <DescriptionStyled>
            <figure>
                    <img src={flag} alt=""/>
            </figure>
                <div className="description">
                    <h2>{name}</h2>
                    <div className="left">
                        <p><span>Native Name: </span>{nativeName}</p>
                        <p><span>Population: </span>{population}</p>
                        <p><span>Region: </span>{region}</p>
                        <p><span>Sub Region: </span>{subregion}</p>
                        <p><span>Capital: </span>{capital}</p>
                    </div>
                    <div className="right">
                        <p><span>Top Level Domain: </span>{topLevelDomain}</p>
                        <p><span>Currencies: </span>{currencies != undefined ? currencies[0].name : ''}</p>
                        <p><span>Languages: </span>{languages != undefined ? languages[0].name : ''}</p>
                    </div>
                    <div className="reference">
                        <p>Border Countries: 
                        {
                        borders != undefined 
                        ?
                            borders.map((border, i)=>(
                                <button key={i}>{border}</button>
                            )) 
                        : 
                            ''
                        }
                        </p>
                    </div>
                </div>

            </DescriptionStyled>
        </CountryDetailsStyled>
    );
}
 
export default CountryDetails;