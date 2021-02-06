import * as React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SupportDevContent from './SupportDevContent'
import SupportDevHeader from './SupportDevHeader'
import Copyright from '../Copyright'
export default  class SupportDevComp extends React.Component 
{
    render(props)
    {
        console.log(this.props)
        const {classes,onDrawerToggle,state} = this.props
        
        console.log(this.props.onDrawerToggle)
        return(      
           
                
                <div className={classes.app}> 
                    <SupportDevHeader onDrawerToggle={onDrawerToggle} />
 

                <main className={classes.main}>
                   <SupportDevContent />
                </main>

                <footer className={classes.footer}>
                    <Copyright />
                </footer>
            
                </div>
            
            
            
            );

    }
    





}
