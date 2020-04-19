import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import Logo from "../../images/mocchi@2x.png"

const Header = () => (
    <header>
        <Link className='logo' to='/'>
            <img src={Logo} alt="Mocchi"/>
        </Link>
        <div className='login-part'>
            <Link
                className='sign-in font16'
                to='sign-in'>
                Sign In
            </Link>
            <Link
                className='btn sign-up font14'
                to='sign-up'>
                Sign Up
            </Link>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
