import * as React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Navigator from './Navigator';
import Content from './Content';
import Header from './Header';
import LinkHeader from './links/LinkHeader'
import LinkContent from './links/LinkContent'
import LinkComp from './links/LinkComp'
import Copyright from './Copyright'
import {theme,styles} from './lookcss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as LinkUI ,
  useRouteMatch,
  useParams
} from "react-router-dom";
const drawerWidth = 256;

function Paperbase(props) {
  const {classes}  = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          <Hidden smDown implementation="css">
            <Navigator PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav>
       

        <div className={classes.app}>
        <Switch>
          
          <Route path="/Links">
          <LinkComp onDrawerToggle={handleDrawerToggle} classes={classes}/>
          <main className={classes.main}>
            <LinkContent />
          </main>
          </Route>
          
          <Route path="/Printers">
          <LinkHeader onDrawerToggle={handleDrawerToggle} />
          <main className={classes.main}>
            <LinkContent />
          </main>
          </Route>
          
          <Route path="/">
          <Header onDrawerToggle={handleDrawerToggle} />
          <main className={classes.main}>
            <Content />
          </main>
          </Route>

        </Switch>
         
          
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      
      </div>
    </ThemeProvider>
  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);
