import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from './styles/home.module.scss'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Fam!</h1>
    <p>Welcome to the Song Club.</p>
    <div className={styles.links}>
      <Link to="/week-1/">Week 1</Link>
      <Link to="/week-3/">Week 3</Link>
    </div>
  </Layout>
)

export default IndexPage
