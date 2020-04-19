/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header/header"
import Footer from "./footer/footer"
import AOS from 'aos';

import "./layout.scss"
import 'aos/dist/aos.css';

const Layout = ({children, showHeader, showFooter}) => {
    AOS.init({
        offset: 300,
        delay: 50
    });
    if (showHeader && showFooter) {
        return (
            <>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </>
        )
    }
    return (
        <>
            <main>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool
}

export default Layout
