import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation }  from 'react-router-dom';
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import decode from "jwt-decode";
import { AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core';
import BrandLogo   from '../../Images/BrandLogo.png';
import useStyles  from "./Styles";

const NavBar = () => {
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    useLocation
    const logout = () => {
        dispatch({type: LOGOUT})

        navigate('/')
        
        setUser(null)
    };

//expiry token 
    useEffect(()=>{
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));

},[location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Link to="/"><img className={classes.brandLogo} src={BrandLogo}/></Link>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.pruple} alt={user.result.name} src={user.result.picture}>
                        {user.result.name}                        
                    </Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Link to="/auth"><Button variant="contained" color="primary">Sign in</Button></Link>
            )}
        </Toolbar>
    </AppBar>
  )
}

export default NavBar