import * as React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import PrinterContent from './PrinterContent'
import PrinterHeader from './PrinterHeader'
import Copyright from '../Copyright'
export default  class PrinterComp extends React.Component 
{
    render(props)
    {
        console.log(this.props)
        const {classes,onDrawerToggle,state} = this.props
        
        console.log(this.props.onDrawerToggle)
        return(      
           
                
                <div className={classes.app}> 
                    <PrinterHeader onDrawerToggle={onDrawerToggle} />
 
                    <main className={classes.main}>
                        <PrinterContent />
                    </main>

                    <footer className={classes.footer}>
                        <Copyright />
                    </footer>
            
                </div>           
            
            );

    }
    





}
