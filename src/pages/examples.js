import React from 'react'
import Layout from '../components/layout'
import Header from '../examples/Header'
// import HeaderStatic from '../examples/HeaderStatic'
import { graphql } from 'gatsby'

const examples = ({ data }) => {
   
    const { site: { bugsBunny: { author }}} = data
    return (
        <Layout>
            {/* <HeaderStatic /> */}
            <Header />
            <h4>Author: {author}</h4>
        </Layout>
    )
}

export const data = graphql`
{
    site {
      bugsBunny: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
export default examples
