import React from 'react'
import Link from 'next/link'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Nav />
    <h1>
      Home
    </h1>
    <p>
      This is proof of concept, showing how <a href="https://github.com/alphagov/govuk-frontend">govuk-frontend</a> can be used as <a href="https://github.com/css-modules/css-modules">CSS modules</a> via a <a href="https://github.com/penx/govuk-frontend-react">set of React components</a> that is <a href="https://www.npmjs.com/package/govuk-frontend-react">published to npm</a>, in a way that is compatible with <a href="https://nextjs.org">nextjs</a>, with support for <a href="https://webpack.js.org/guides/tree-shaking/">tree shaking</a> and <a href="https://github.com/zeit/next-plugins/pull/190">pending support</a> for <a href="https://reactjs.org/docs/code-splitting.html">code splitting/lazy loading</a>.
    </p>
  </div>
)

export default Home
