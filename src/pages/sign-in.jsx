import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/forms.scss"
import Logo from "../images/mocchi@2x.png";

const SignIpPage = () => (
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
                Sign In
            </h1>
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
                Sign In
            </button>

            <span className='terms font13'>
                By using, I agree to Mocchi
                <Link to='/terms'>
                    Terms of Service and Privacy Policy.
                </Link>
            </span>
        </div>
    </Layout>
)

export default SignIpPage
