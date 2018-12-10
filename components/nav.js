import React from 'react'
import Link from 'next/link'
import { Header } from "govuk-frontend-react";

const NextLink = ({href, ...props}) => <Link href={href}><a {...props} /></Link>

const Nav = () => (
  <Header
    productName="React"
    homepage={{ href: '/', as: NextLink }}
    navigation={(
      <Header.Navigation>
        <Header.NavigationItem as={NextLink} href="/">Home</Header.NavigationItem>
        <Header.NavigationItem as={NextLink} href="/about">About</Header.NavigationItem>
        <Header.NavigationItem href="https://github.com/penx/govuk-frontend-react-example">GitHub</Header.NavigationItem>
      </Header.Navigation>
    )}
  />
)

export default Nav
