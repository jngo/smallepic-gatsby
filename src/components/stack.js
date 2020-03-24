import styled from "styled-components"
import { modularScale } from "./tokens.js"

const Stack = styled.div`
  & > * + *
  {
    margin-top: ${props => props.modularScale ? modularScale(props.modularScale) : modularScale(0)}
  }
`

export { Stack as default }
