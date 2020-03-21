import styled from "styled-components"
import { modularScale } from "./tokens.js"

const Section = styled.section`
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
        margin: ${modularScale(0)} 0 0 0;
      }
    }
  }

  & + &
  {
    margin-top: ${modularScale(31)};
  }
`

export { Section as default }
