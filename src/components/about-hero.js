import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading } from "./ui"
import * as styles from "./about-hero.css"

export default function AboutHero(props) {
  console.log(props.image.gatsbyImageData)
  return (
    <Section>
      <Container width="wide" stlye={{ textAlign: "center" }}>
        <SuperHeading className={styles.aboutHeroHeader}>
          {props.heading}
        </SuperHeading>
        {props.text && (
          <Text className={styles.aboutHeroText}>{props.text}</Text>
        )}
      </Container>
      <Container
        width="wide"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
            className={styles.aboutHeroImage}
          />
        )}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment AboutHeroContent on AboutHero {
    id
    heading
    text
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
