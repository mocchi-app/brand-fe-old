import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/forms.scss"
import Logo from "../images/mocchi@2x.png"

export default class SettingsPage extends Component {

    render() {
        return (
            <Layout
                showHeader={false}
                showFooter={false}
            >
                <SEO title="Mocchi"/>
                <Link to='/'>
                    <img src={Logo} alt="Mocchi"/>
                </Link>
                <div className='form-body'>
                    <h1 className='font32'>
                        Sign Up
                    </h1>
                    <input
                        type="text"
                        name="fullName"
                        placeholder='Full name'
                        required
                    />
                    <input
                        type="text"
                        name="companyUrl"
                        placeholder='Company URL'
                        required
                    />
                    <input
                        type="email"
                        name="companyEmail"
                        placeholder='Company email'
                        required
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder='Password'
                        required
                    />
                    <button className='btn font18'>
                        Create Account
                    </button>

                    <span className='terms font13'>
                By signing up, I agree to Mocchi
                <Link to='/terms'>
                    Terms of Service and Privacy Policy.
                </Link>
            </span>
                </div>
            </Layout>
        )
    }
}
