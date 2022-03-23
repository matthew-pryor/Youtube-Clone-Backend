import React, {useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CommentList from "../../components/CommentList/CommentList";

const VideoPage = (props) => {
    
    const [user, token] = useAuth();
    
    return ( 
        <div>
            <h1>Video Player for {user.username}</h1>
            <VideoPlayer />
            <CommentList />
        </div>
     );
}
 
export default VideoPage;