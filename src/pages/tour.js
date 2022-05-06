import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import { BlockLink } from "../components/ui"
import Header from "../components/header"

export default function Speaking(props) {
  console.log(props.data)
  const dates = props.data.aboutPage.blocks[7].content
  return (
    <BlockLink to={`/speaking`}>
      <Header />
      <div>
        {dates.map((date) => (
          <div key={date.id}>
            <h2>{date.city}</h2> <h3>{date.date}</h3>
          </div>
        ))}
      </div>
    </BlockLink>
  )
}

export const query = graphql`
  {
    aboutPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...AboutHeroContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...AboutLeadershipContent
        ...HomepageBenefitListContent
        ...AboutLogoListContent
        ...HomepageCtaContent
        ...TourDatesContent
      }
    }
  }
`
