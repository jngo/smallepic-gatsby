import { createGlobalStyle } from "styled-components"
import { tokens, modularScale } from "./tokens.js"
import "./typekit.css"

const Style = createGlobalStyle`
  :root
  {
    --box-background-color: ${tokens.box.background.color.dark};
    --box-border-color: ${tokens.box.border.color.dark};
    --typography-base-color: ${tokens.typography.base.color.dark};
    --typography-heading-color: ${tokens.typography.heading.color.dark};
    --typography-anchor-background-color: ${tokens.typography.anchor.backgroundColor.dark};
    --typography-anchor-color: ${tokens.typography.anchor.color.dark};

    @media (prefers-color-scheme: light)
    {
      --box-background-color: ${tokens.box.background.color.light};
      --box-border-color: ${tokens.box.border.color.light};
      --typography-base-color: ${tokens.typography.base.color.light};
      --typography-heading-color: ${tokens.typography.heading.color.light};
      --typography-anchor-background-color: ${tokens.typography.anchor.backgroundColor.light};
      --typography-anchor-color: ${tokens.typography.anchor.color.light};
    }
  }

  * 
  {
    box-sizing: border-box;
  }

  html 
  {
    border: solid 1vmax var(--box-border-color);
    font-family: ${tokens.typography.base.fontFamily};
    font-weight: ${tokens.typography.base.fontWeight};
    background-color: var(--box-background-color);
    color: var(--typography-base-color);
    min-height: 100vh;
    padding: 8vw;

    @media screen 
    {
      font-size: ${tokens.typography.base.fontSize.large};
      line-height: ${tokens.typography.base.lineHeight.large};
    }

    @media screen and (max-width: 800px) 
    {
      font-size: ${tokens.typography.base.fontSize.medium};
      line-height: ${tokens.typography.base.lineHeight.large};
    }

    @media all and (max-width: 400px) 
    {
      font-size: ${tokens.typography.base.fontSize.small};
      line-height: ${tokens.typography.base.lineHeight.large};
    }
  }

  body 
  {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 
  {
    font-family: ${tokens.typography.heading.fontFamily};
    font-weight: ${tokens.typography.heading.fontWeight};
  }

  h1 
  {
    color: var(--typography-heading-color);
    font-size: ${modularScale(7)};
    line-height: ${modularScale(12)};
    margin: 0 0 ${modularScale(6)} 0;

    strong 
    {
      display: block;
      margin-top: ${modularScale(5)};
    }

    em 
    {
      color: var(--typography-base-color);
      font-size: ${modularScale(0)};
      font-style: normal;
      font-weight: ${tokens.typography.base.fontWeight};
    }
  }

  h2 
  {
    font-size: ${modularScale(0)};
    line-height: ${modularScale(5)};
  }

  a 
  {
    color: var(--typography-anchor-color);
    text-decoration: none;

    &:hover 
    {
      background: var(--typography-anchor-background-color);
    }
  }
`

export { Style as default }
