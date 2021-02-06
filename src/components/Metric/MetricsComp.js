import * as React from 'react';
import Copyright from '../Copyright'
import MetricsHeader from './MetricsHeader'
import MetricsContent from "./MetricsContent";
export default  class MetricsComp extends React.Component 
{
    render(props)
    {
        console.log(this.props)
        const {classes,onDrawerToggle} = this.props
        
        console.log(this.props.onDrawerToggle)
        return(      
           
                
                <div className={classes.app}> 
                    <MetricsHeader onDrawerToggle={onDrawerToggle} />
 

                <main className={classes.main}>
                   <MetricsContent />
                </main>

                <footer className={classes.footer}>
                    <Copyright />
                </footer>
            
                </div>
            
            
            
            );

    }
    





}
