import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
{
	site {
		siteMetadata {
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

const Header = () => {
  const { site: { siteMetadata: { title, person: { name }}}} = useStaticQuery(getData)
  return (
    <div>
        <h2>title: {title}</h2>
        <h2>name: {name}</h2>
        {/* <h2>title: {data.site.siteMetadata.title}</h2>
        <h2>name: {data.site.siteMetadata.person.name}</h2> */}
    </div>
  )
}

export default Header
