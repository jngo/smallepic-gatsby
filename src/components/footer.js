import React from "react"
import styled from "styled-components"
import { modularScale } from "./tokens.js"

const Container = styled.footer`
  max-width: 40rem;

  ul
  {
    list-style: none;
    margin: 0;
    padding: 0;

    li 
    {
      display: inline-block;

      & + li 
      {
        margin: 0 0 0 ${modularScale(6)};
      }
    }
  }
`
export default function Footer(props) {
  return (
    <Container>
      <nav>
        <ul>
          <li><a href={`mailto:${props.handles.email}`}>Email</a></li>
          <li><a href={`https://www.linkedin.com/in/${props.handles.linkedIn}/`}>LinkedIn</a></li>
          <li><a href={`https://github.com/${props.handles.github}`}>Github</a></li>
          <li><a href={`https://twitter.com/${props.handles.twitter}`}>Twitter</a></li>
        </ul>
      </nav>
    </Container>
  )
}
