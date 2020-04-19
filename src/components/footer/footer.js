import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./footer.scss"

const Footer = () => (
    <footer>
        <div className='content-wrapper'>
            <h4 className='footer-title font48'>
                Scale your referrals.
            </h4>
            <span className='footer-subtitle font16'>
                Automate your referrals.
            </span>
            <Link className='btn font18' to='#'>
                Add to Chrome
            </Link>
        </div>
    </footer>
)

Footer.propTypes = {
    footerTitle: PropTypes.string,
    footerSubTitle: PropTypes.string,
    footerButtonTitle: PropTypes.string
}

Footer.defaultProps = {
    footerTitle: ``,
    footerSubTitle: ``,
    footerButtonTitle: ``
}

export default Footer
