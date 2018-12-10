import React from 'react'
import Link from 'next/link'
import Nav from '../components/nav'

import { Button } from "govuk-frontend-react";

const Home = () => (
  <div>
    <Nav />
    <h1>
      About
    </h1>
    <div>
      <Button>A button!</Button>
      <h2>Tree shaking/Lazy loading</h2>
      <p>We would expect the CSS for the button to be extracted to a separate file. This is not currently working, awaiting <a href="https://github.com/zeit/next-plugins/pull/190">zeit/next-plugins#190</a>.</p>
    </div>
  </div>
)

export default Home
