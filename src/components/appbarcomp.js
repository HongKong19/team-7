import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  
  }));

  const Example = (props) => {
    return (
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>

    );
  }
  export default Example;