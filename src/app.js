import * as React from "react"

import  Sidemenu from "./components/sidemenu"
import Panel from "./components/panel"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
        <Router>
        <div>
          <Paperbase />
          <Panel />
          <Sidemenu />
        </div>
        </Router>
      )
    }
  }


//This is part of Material UI