import * as React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LinkContent from './LinkContent'
import LinkHeader from './LinkHeader'
export default  class LinkComp extends React.Component 
{
    render(props)
    {
        const { classes } = props;
        const [mobileOpen, setMobileOpen] = React.useState(false);
      
        const handleDrawerToggle = () => {
          setMobileOpen(!mobileOpen);
        };
      
        
        return(       
             <div className={classes.app}> 
                <LinkHeader onDrawerToggle={handleDrawerToggle} />
                <main className={classes.main}>
                    <LinkContent />
                </main>
                <footer className={classes.footer}>
                    <Copyright />
                </footer>
            </div>);

    }
    





}
