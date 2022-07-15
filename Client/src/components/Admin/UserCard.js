import React from 'react'
import  { useDispatch } from 'react-redux';
import  { deleteUser } from '../../actions/users';


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import './style.css'

const UserCard = ({ user }) => {

    const dispatch = useDispatch();

  return (
    <Card className='scrollCont' key ={user._id} sx={{ maxWidth: 345 }}>
        <CardHeader className="title"
        avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
            </Avatar>
        }
        title={user.name}
        /> 
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            {user.email}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Button variant="outlined" color="primary" startIcon={<DeleteIcon />} onClick={ () => dispatch(deleteUser(user._id))} />
            <Button variant="outlined" color="secondary" >
                Block {user?.name?.split(' ')[0]}
            </Button>
        </CardActions>
    </Card>
  )
}

export default UserCard