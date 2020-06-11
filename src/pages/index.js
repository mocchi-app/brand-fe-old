import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/index.scss"
import mocchiLanding from "../images/app-landing-choose-referral@2x.png";
import mocchiIcon from "../images/mocchi-icon.svg"
import mocchiBrandsLanding from "../images/app-landing-brands@2x.png"
import mocchiActiveBrands from "../images/app-landing-activate-referral@2x.png"

const IndexPage = () => (
    <Layout
        showHeader={true}
        showFooter={true}
    >
        <SEO title="Mocchi"/>
        <section className='container-bg-img-right'>
            <div className='subsection-link'>
                <div className='content'>
                    <h2 className='font48 font32-xs'>
                        Shop with friends, earn money.
                    </h2>
                    <span className='font16'>
                        Make money with friends by automatically sharing referrals.
                    </span>
                    <Link className='btn' to="#">
                        Add to Chrome
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
        <section className='container-title'>
            <h2 className='font48 font32-xs'>
                How it works
            </h2>
        </section>
        <section className='container'>
            <div className='content-wrapper first-step'>
                <div className='content-text'>
                    <span className='mobile-step'>
                        1
                    </span>
                    <h2 className='font48 font16-xs'>
                        Add to Chrome.
                    </h2>
                    <span className='font16'>
                        Add to chrome and choose your contacts, Mocchi automates the rest.
                    </span>
                </div>
                <div className='content-img'>
                    <img data-aos="fade-up" src={mocchiLanding} alt="Mocchi landing"/>
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
                    <img data-aos="fade-up" src={mocchiBrandsLanding} alt="Mocchi"/>
                </div>
            </div>
            <div className='subsection-link'>
                <div className='content'>
                    <span className='mobile-step'>
                        2
                    </span>
                    <h2 className='font48 font16-xs'>
                        Shop as normal.
                    </h2>
                    <span className='font16'>
                        Automatically capture referrals from friends as you browse our partner sites.
                    </span>
                    <Link className='btn' to="#">
                        Add to Chrome
                    </Link>
                </div>
            </div>
        </section>
        <section className='container'>
            <div className='content-wrapper first-step'>
                <div className='content-text'>
                    <span className='mobile-step'>
                        3
                    </span>
                    <h2 className='font48 font16-xs'>
                        Earn rewards.
                    </h2>
                    <span className='font16'>
                        Automatically share and use referrals with friends.
                    </span>
                </div>
                <div className='content-img'>
                    <img data-aos="fade-up" src={mocchiActiveBrands} alt="Mocchi landing"/>
                </div>
            </div>
        </section>
    </Layout>
)

export default IndexPage
