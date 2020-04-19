import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/forms.scss"
import Logo from "../images/mocchi@2x.png";
import minus from "../images/minus.svg"
import plus from "../images/plus.svg"
import { Link } from "gatsby";

export default class SettingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percents: 10
        };
    }

    decreaseClick = () => {
        if ((this.state.percents < 100 && this.state.percents > 0) || this.state.percents === 100) {
            this.setState({ percents: this.state.percents - 1 });
        }
    }

    increaseClick = () => {
        if ((this.state.percents < 100 && this.state.percents > 0) || this.state.percents === 0 ) {
            this.setState({ percents: this.state.percents + 1 });
        }
    }

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
                        Welcome To Mocchi
                    </h1>
                    <span className='info'>
                        Please confirm your user commission percentage and you’ll be all set.
                    </span>
                    <div className='percent-input'>
                        <span
                            role = "button"
                            tabIndex={0}
                            className='percent-input-down'
                            onClick={this.decreaseClick}
                            onKeyDown={this.decreaseClick}
                        >
                            <img src={minus} alt=""/>
                        </span>
                        <span className='percent-input-value font18'>
                            { this.state.percents }%
                        </span>
                        <span
                            role = "button"
                            tabIndex={0}
                            className='percent-input-up'
                            onClick={this.increaseClick}
                            onKeyDown={this.increaseClick}
                        >
                            <img src={plus} alt=""/>
                        </span>
                    </div>
                    <button className='btn font18'>
                        Confirm
                    </button>
                </div>
            </Layout>
        )
    }
}