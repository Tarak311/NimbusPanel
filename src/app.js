import * as React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import Navigator from "./components/Navigator"
import  Sidemenu from "./components/sidemenu"
import Panel from "./components/panel"

import Paperbase from "./components/Paperbase"
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
  export default  class App extends React.Component {
    
 
  
 
  
    render() {
      return (
        <div>

          <Paperbase />
          <Panel />
          <Sidemenu />
        </div>
      )
    }
  }


//This is part of Material UI