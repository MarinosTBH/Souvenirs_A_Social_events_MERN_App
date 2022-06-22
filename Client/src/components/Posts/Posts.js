import React from "react";
import Post from './Post/Post'
import {useSelector} from 'react-redux';
//import makeStyles 

const Posts = () =>{
    const posts = useSelector((state)=>state.posts);
    //styles
    ////////////////////
    console.log(posts)
    return(
        <>
            <h1>Posts</h1>
            <Post/>
            <Post/>
            <Post/>
        </>
    )
}

export default Posts;