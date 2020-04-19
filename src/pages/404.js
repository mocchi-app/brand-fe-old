import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/errors.scss"

const NotFoundPage = () => (
  <Layout
      showHeader={true}
      showFooter={true}
  >
    <SEO title="404: Not found" />
    <div className='error-content'>
        <h1>NOT FOUND</h1>
        <span
            role="img"
            className='font32'
            aria-label='cry emoji'
        >
            404 😭
        </span>
    </div>
  </Layout>
)

export default NotFoundPage
