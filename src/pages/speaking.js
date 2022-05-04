import React from "react"
import { Link } from "gatsby"
import { BlockLink, Box } from "../components/ui"

import Layout from "../components/layout"

const SpeakingPage = () => (
  <Box>
    <BlockLink to='/'>
      <h1> Back home</h1>
    </BlockLink>
    <h3>Speaking Engagements</h3>
    <p>I would love to speak at your conference!</p>
    <p>I will be speaking at the following conferences next year:</p>
    <ul>
      <li>JS Heroes</li>
      <li>self.conference</li>
      <li>Strange Loop</li>
    </ul>
  </Box>
)

export default SpeakingPage
