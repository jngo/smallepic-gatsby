import React from "react"
import styled from "styled-components"
import { modularScale } from "./tokens.js"

const Container = styled.header`
  max-width: 40rem;

  p
  {
    font-size: ${modularScale(3)};
    line-height: ${modularScale(8)};
  }
`

export default function Masthead() {
  return (
    <Container>
      <h1>Hi, I’m John.<br /><strong>I build products at the intersection of design and engineering.</strong></h1>
      <p>I talk to customers, align stakeholders, design experiences, conspire with engineers, and code interfaces.</p>
      <p>I design complex products for technical users that are backed by deep understanding of customer needs and a strong systems mindset. My passion is equally driven by the need to uncover and understand customer problems as it is in the exploration of potential solutions.</p>
      <p>I love immersing myself in the details whether it’s clearly defining and articulating the problem in Jira, building out flexible design system components in Figma, or implementing responsive interfaces with CSS and HTML.</p>
    </Container>
  )
}
