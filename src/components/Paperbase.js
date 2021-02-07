import * as React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {BrowserRouter as Router,Switch,Route,Link as LinkUI ,useRouteMatch,useParams} from "react-router-dom";



import Navigator from './Navigator';
import LinkComp from './Links/LinkComp'
import HomeStatsComp from './HomeStats/HomeStatsComp'
import MetricsComp from './Metric/MetricsComp'
import PrinterComp from './Printer/PrinterComp'
import ProfileComp from './Profile/ProfileComp'
import RouterComp from './Router/RouterComp'
import SupportDevComp from './SupportDev/SupportDevComp'
import SwitchesComp  from './Switches/SwitchesComp'
import SmartDevComp from './SmartDev/SmartDevComp'
import {theme,styles} from './lookcss'




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
               
        <Switch>
          
          <Route path="/HomeStats">
            <HomeStatsComp onDrawerToggle={handleDrawerToggle} classes={classes}/>
          </Route>
          
          <Route path="/Links">
            <LinkComp onDrawerToggle={handleDrawerToggle} classes={classes}/>
          </Route>

          <Route path="/Metrics">
            <MetricsComp onDrawerToggle={handleDrawerToggle} classes={classes}/>
          </Route>

          <Route path="/Printers">
            <PrinterComp onDrawerToggle={handleDrawerToggle} classes={classes}/>
          </Route>

          <Route path="/Profile">
            <ProfileComp onDrawerToggle={handleDrawerToggle} classes={classes}/>
          </Route>

          <Route path="/Router">
            <RouterComp onDrawerToggle={handleDrawerToggle} classes={classes}/>
          </Route>

          <Route path="/SmartDev">
            <SmartDevComp onDrawerToggle={handleDrawerToggle} classes={classes}/>
          </Route>
          
          <Route path="/SupportDev">
            <SupportDevComp onDrawerToggle={handleDrawerToggle} classes={classes}/>
          </Route>


          <Route path="/Switches">
            <SwitchesComp onDrawerToggle={handleDrawerToggle} classes={classes}/>
          </Route>

          <Route path="/">
            <HomeStatsComp onDrawerToggle={handleDrawerToggle} classes={classes}/>
          </Route>

         </Switch>
      
      </div>
    </ThemeProvider>
  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);
