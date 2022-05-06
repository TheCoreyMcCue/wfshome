import React from "react"
import { graphql } from "gatsby"
import { Container, Section, Text, SuperHeading } from "./ui"

const TourDates = (props) => {
  const tourDates = props.content
  console.log(tourDates)
  return (
    <Container>
      <Section>
        <SuperHeading>{props.city}</SuperHeading>
        <Text>{props.description}</Text>
      </Section>
    </Container>
  )
}

export default TourDates

export const query = graphql`
  fragment TourDatesContent on TourDates {
    id
    content {
      id
      city
      date
      description
    }
  }
`
