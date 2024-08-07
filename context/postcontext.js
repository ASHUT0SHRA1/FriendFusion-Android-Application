import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const PostContext = createContext(); 

const PostProvider = ({ children }) => { 

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]); 
    const [mypost , setmypost] = useState([]);
    const getAllPosts = async() => {
        setLoading(true);
        try {
            const { data } = await axios.get('/post/get-all-post');
            setPosts(data?.posts);
        } catch (error) {
            console.error(error);
        }
    };
    const getMyPost = async() =>{
        // setLoading(true);
        // try {
        //     const {data} = await axios.get('/post/user-post' );
        //     setmypost([...mypost , data?.userposts]);
        // } catch (error) {
        //     console.log(error)
            
        // }
    }
    
    useEffect(() => {
        getAllPosts();

    }, []);
    
    return (
        <PostContext.Provider value={[ posts, setPosts , getAllPosts] }>
            {children}
        </PostContext.Provider>
    );
};

export { PostContext, PostProvider };
