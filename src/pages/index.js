import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Fam!</h1>
    <p>Welcome to the Song Club.</p>
    <Link to="/week-1/">Week 1</Link>
  </Layout>
)

export default IndexPage
