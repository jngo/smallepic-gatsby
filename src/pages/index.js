import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

export default () => (
  <Layout>
    <Section id="up42">
      <h1><em>2019–</em><br />I’m currently democratising access to geospatial data and analytics at <a href="https://up42.com/">UP42</a>.</h1>
      <p>As the first design hire within the Airbus Defence and Space subsidiary, I have established design practice within the organisation.</p>
      <p>I’ve been responsible for establishing a culture of continuous research through a combination of quantitative (SQL, BigQuery, etc.) and qualitative (user interviews, usability testing, etc.) techniques—to ensure decisions are made with the best data and insights at hand.</p>
      <p>I also collaborate with our frontend team to establish the foundations of our design system, through the design and implementation of token and component libraries in Figma and Vue.js.</p>

      <h2>Highlights</h2>
      <ul>
        <li><strong>Catalog Search</strong><br />A technically ambitious project to provide real-time visibility into available satellite imagery from multiple providers.</li>
        <li><strong>Geospatial Solutions Marketplace</strong><br />Facilitation of a design sprint exploring the opportunities for a lucrative, yet potentially high risk venture into a new market.</li>
        <li><strong>Marketing Website</strong><br />A holistic redesign of the marketing website driven by a research led understanding of customers.</li>
        <li><strong>Research Master Plan</strong><br />Working closely with sales, marketing, and business intelligence to implement a research stack for gathering, aggregating, and disseminating customer research and insights.</li>
      </ul>
    </Section>

    <Section id="candis">
      <h1><em>2017–2019</em><br />Prior to that, I was helping businesses automate their bookkeeping and accounting at <a href="https://www.candis.io/">Candis</a>.</h1>
      <p>As a single person design team, I was responsible for user experience across the portfolio of products at Candis. Practically speaking, I conducted user research, produced design concepts and prototypes, documented epics and user stories, and contributed UI enhancements to the React codebase.</p>
      <p>I also led the initiative to scale design to meet the needs of a growing engineering team through the development of a design system that served as the style guide and component library for current and future Candis products.</p>
    </Section>

    <Section id="urban-sports-club">
      <h1><em>2015</em><br />I also helped people discover sports venues and achieve their fitness goals at <a href="https://urbansportsclub.com/">Urban Sports Club</a>.</h1>
      <p>When the service was only available in Berlin, I implemented key technical infrastructure including source control and continuous integration to support the startup’s ambitious plans for rapid growth which now covers over 80 cities.</p>
      <p>My key achievement was leading the delivery team, where I designed the Restful API specification and mobile app experiences. Within three months, we replaced the existing manual membership card and log sheet processes with an API and mobile apps enabling members to check-in with their iOS and Android devices.</p>
    </Section>
  </Layout>
)
