import * as React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SmartDevContent from './SmartDevContent'
import SmartDevHeader from './SmartDevHeader'
import Copyright from '../Copyright'
export default  class SmartDevComp extends React.Component 
{
    render(props)
    {
        console.log(this.props)
        const {classes,onDrawerToggle,state} = this.props
        
        console.log(this.props.onDrawerToggle)
        return(      
           
                
                <div className={classes.app}> 
                    <SmartDevHeader onDrawerToggle={onDrawerToggle} />
 

                <main className={classes.main}>
                   <SmartDevContent />
                </main>

                <footer className={classes.footer}>
                    <Copyright />
                </footer>
            
                </div>
            
            
            
            );

    }
    





}
