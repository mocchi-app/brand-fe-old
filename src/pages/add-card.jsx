import React, { Component } from "react"
import { Link } from "gatsby"
import MaskedInput from "react-text-mask"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/forms.scss"
import Logo from "../images/mocchi@2x.png";

export default class SettingsPage extends Component {

    render() {
        return (
            <Layout
                showHeader={false}
                showFooter={false}
            >
                <SEO title="Mocchi"/>
                <img src={Logo} alt="Mocchi"/>
                <div className='form-body'>
                    <h1 className='font32'>
                        Brand Credit Card
                    </h1>
                    <MaskedInput
                        mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                        placeholder='Card Number'
                        guide={false}
                    />
                    <div className='card-info'>
                        <MaskedInput
                            mask={[/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, /\d/, /\d/]}
                            placeholder='MM / YYYY'
                            guide={false}
                        />
                        <MaskedInput
                            mask={[/\d/, /\d/, /\d/]}
                            placeholder='CVV Code'
                            guide={false}
                        />
                    </div>
                    <button className='btn font18'>
                        Confirm
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
    }
}
