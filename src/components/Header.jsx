import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const HeaderStyled = styled.div`
    background: var(--white);
    margin-bottom: 1em;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .06);
    padding: 0 1em;
    .content{
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    a{
        text-decoration:none;
    }
    h1{
        font-size: 14px;
        color: var(--black);
    }
    .dark-md{
        cursor: pointer;
        .moon{
            transform: rotate(-25deg);
            display: inline-flex;
            margin-right: 10px;
        }
        p{
            font-size: 12px;
            font-weight: 600;
        }
    }
    @media screen and (min-width: 768px) {
        h1{
            font-size: 24px;
        }
        p{
            font-size: 16px;
        }
    }
`
const Header = ({setDarkMode, darkMode}) => {
    const handleClick = () => {
        setDarkMode(!darkMode)
    }
    return (
        <HeaderStyled>
            <div className="content">
                <Link to="/" >
                    <h1>Where in World?</h1>
                </Link>
                <div className="dark-md">
                    <p onClick={handleClick}>
                        <span className="moon">
                            {
                                darkMode 
                                ? 
                                    <i className="far fa-moon"></i> 
                                : 
                                    <i className="fas fa-moon"></i>
                            }
                        </span>
                        Dark Mode
                    </p>
                </div>
            </div>
        </HeaderStyled>
    );
}
 
export default Header;