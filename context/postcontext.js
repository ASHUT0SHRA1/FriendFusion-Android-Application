import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const PostContext = createContext();

const PostProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const getAllPosts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/post/get-all-post');
            setPosts(data?.posts);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        getAllPosts();

    }, []);

    return (
        <PostContext.Provider value={[posts, setPosts, getAllPosts]}>
            {children}
        </PostContext.Provider>
    );
};

export { PostContext, PostProvider };
