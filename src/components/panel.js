import * as React from "react"
import {IconButton } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { AppBar, Toolbar } from "@material-ui/core"
const navLinks = [
    { title: `about us`, path: `/about-us` },
    { title: `product`, path: `/product` },
    { title: `blog`, path: `/blog` },
    { title: `contact`, path: `/contact` },
    { title: `faq`, path: `/faq` },
  ]
const Header = () => {
  return (
 
    <AppBar position="static">
      <Toolbar>
      <Home fontSize="large" />
         
      </Toolbar>
    </AppBar>
 
  )
}
export default Header

//This is part of Material UI