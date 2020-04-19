import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.scss"
import "../components/get-start.scss"
import mocchiLanding from "../images/app-landing-choose-referral@2x.png";
import mocchiIcon from "../images/mocchi-icon.svg"
import mocchiBrandsLanding from "../images/app-landing-brands@2x.png"
import mocchiActiveBrands from "../images/app-landing-activate-referral@2x.png"

const GetStartPage = () => (
    <Layout
        showHeader={true}
        showFooter={true}
    >
        <SEO title="Mocchi"/>
        <section className='container-bg-img-right'>
            <div className='subsection-link'>
                <div className='content'>
                    <h2 className='font48'>
                        Mocchi lets friends buy with friends.
                    </h2>
                    <span className='font16'>
                        Mocchi helps friends buy with friends  in real time.
                    </span>
                    <Link className='btn' to="/sign-up">
                        Get started
                    </Link>
                </div>
            </div>
            <div className='subsection-bg'>
                <div className='browser-top-bar'>
                </div>
                <div className="browser-search-panel">
                    <img src={mocchiIcon} alt="Mocchi icon"/>
                </div>
                <div className='browser-content'>
                    <img data-aos="fade-up" src={mocchiLanding} alt="Mocchi"/>
                </div>
            </div>
        </section>
        <section className='container'>
            <div className='content-wrapper first-step'>
                <div className='content-text'>
                    <h3 className='font48'>
                        Supercharge customer referrals.
                    </h3>
                    <span className='font16'>
                        Easily connect new users with friends who love your brand.
                    </span>
                </div>
                <div className='content-img'>
                    <img data-aos="fade-up" src={mocchiBrandsLanding} alt="Mocchi landing"/>
                </div>
            </div>
        </section>
        <section className='container-bg-img-left'>
            <div className='subsection-bg'>
                <div className='browser-top-bar'>
                </div>
                <div className="browser-search-panel">
                    <img src={mocchiIcon} alt="Mocchi icon"/>
                </div>
                <div className='browser-content'>
                    <img data-aos="fade-up" src={mocchiActiveBrands} alt="Mocchi"/>
                </div>
            </div>
            <div className='subsection-link'>
                <div className='content'>
                    <h2 className='font48'>
                        Reward customers for sharing.
                    </h2>
                    <span className='font16'>
                        Seamlessly reward your brand advocates.
                    </span>
                </div>
            </div>
        </section>
        <section className='container'>
            <div className='content-wrapper first-step'>
                <div className='content-text'>
                    <h3 className='font48'>
                        Get started for free.
                    </h3>
                    <span className='font16'>
                        Try the first month free, then  $49/mo, plus commission.
                    </span>
                </div>
                <div className='content-pricing'>
                    <div className="content-pricing-wrapper">
                        <div className='content-pricing-header'>
                            <h3 className='font32'>
                                Try Free
                            </h3>
                            <span>
                                Simple, transparent pricing
                            </span>
                            <span className='font48'>
                                20%
                            </span>
                        </div>
                        <div className='content-pricing-body'>
                            <span>
                                20% of total order value
                            </span>
                            <span>
                                Full email support
                            </span>
                            <span>
                                Reporting and analytics
                            </span>
                            <Link to='/sign-up' className='btn'>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default GetStartPage
