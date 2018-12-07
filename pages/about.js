import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import { Button } from "govuk-frontend-react";

const Home = () => (
  <div>
    <Head title="About" />
    <Nav />
    <p>
      This is proof of concept, showing how <a href="https://github.com/alphagov/govuk-frontend">govuk-frontend</a> can be used as <a href="https://github.com/css-modules/css-modules">CSS modules</a> via a <a href="https://github.com/penx/govuk-frontend-react">set of React components</a> that is <a href="https://www.npmjs.com/package/govuk-frontend-react">published to npm</a>, in a way that is compatible with <a href="https://github.com/facebook/create-react-app">create-react-app</a>, with support for <a href="https://webpack.js.org/guides/tree-shaking/">tree shaking</a> and <a href="https://reactjs.org/docs/code-splitting.html">code splitting/lazy loading</a>.
    </p>
    <div>
      <Button>A button!</Button>
      <h2>Tree shaking/Lazy loading</h2>
      <p>Note that the CSS for the button is not included on the home page - it is only loaded once the Button component is used.</p>
    </div>
  </div>
)

export default Home
