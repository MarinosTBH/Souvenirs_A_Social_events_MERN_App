import React, {useState, useEffect} from "react";
import{ Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts' 
//Main Flyer
import Souvenirs from "./Images/Souvernirs.png";

//Components
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

//App Styles
import useStyles from './Styles';

const App = () => {
  const [currentId, setCurrentId] =useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch]);
    return ( 
        <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <img className={classes.image} src={Souvenirs} alt="icon" />
        </AppBar>
         <Grow in> 
          <Container >
            <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    );
}
export default App;

    {/* in (Grow) to make it visible */}  {/* container (Grid) , to make it as a container and gets props  */}
