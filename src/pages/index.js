import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NewLog from "../components/NewLog";
import LogDisplay from "../components/LogDisplay";
import ClearLogs from "../components/ClearLogs"
import DisplayAllLogs from "../components/DisplayAllLogs";


const IndexPage = () => (
  <Layout>
    <SEO title="Clog Log" />
    <NewLog/>
  </Layout>
)

export default IndexPage
