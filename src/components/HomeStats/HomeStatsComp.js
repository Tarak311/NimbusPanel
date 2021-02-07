import * as React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Switch,Route,Link as LinkUI ,useRouteMatch,useParams} from "react-router-dom";


import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Internet from './HomeStatsContent/Internet'
import Electricity from './HomeStatsContent/Electricity'
import WaterUsage from './HomeStatsContent/WaterUsage'
import HomeStatsHeader from './HomeStatsHeader'
import DeviceConnected from './HomeStatsContent/DeviceConnected'
import Copyright from '../Copyright'

export default  class HomeStatsComp extends React.Component 
{
    render(props)
    {
        console.log(this.props)
        const {classes,onDrawerToggle,state} = this.props
        
        console.log(this.props.onDrawerToggle)
        return(      
           
                
                <div className={classes.app}> 
                    <HomeStatsHeader onDrawerToggle={onDrawerToggle} />
 
                <Switch>

                    <Route path="/HomeStats/Internet">
                        <main className={classes.main}>
                            <Internet />
                        </main>
                    </Route>

                    <Route path="/HomeStats/WaterUsage">
                        <main className={classes.main}>
                            <WaterUsage />
                        </main>
                    </Route>

                    <Route path="/HomeStats/Electricity">
                        <main className={classes.main}>
                            <Electricity />
                        </main>
                    </Route>

                    <Route path="/HomeStats/DeviceConnected">
                        <main className={classes.main}>
                            <DeviceConnected />
                        </main>
                    </Route>

                    <Route path="/HomeStats">
                        <main className={classes.main}>
                            <DeviceConnected />
                        </main>

                    </Route>
                </Switch>    
                

                <footer className={classes.footer}>
                    <Copyright />
                </footer>
            
                </div>
            
            
            
            );

    }
    





}
