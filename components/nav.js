import React from 'react'
import Link from 'next/link'
import { Header } from "govuk-frontend-react";

const Nav = () => (
  <Header
    productName="React"
    homepage={{ href: '/', as: (props) => <Link><a {...props} /></Link> }}
    navigation={(
      <Header.Navigation>
        <Header.NavigationItem href="/">Home</Header.NavigationItem>
        <Header.NavigationItem href="/about">About</Header.NavigationItem>
        <Header.NavigationItem href="https://github.com/penx/govuk-frontend-react-example">GitHub</Header.NavigationItem>
      </Header.Navigation>
    )}
  />
)

export default Nav
