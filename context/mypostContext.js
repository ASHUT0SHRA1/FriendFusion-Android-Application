import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./authcontext";

const MypostContext = createContext();

const MyPostProvider = ({ children }) => {
  const [mypost, setMypost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state]  = useContext(AuthContext);  // Ensure state is an object
  const id = state?.user?._id;

  const getMyPost = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/post/user-post/${id}`);
      setMypost(data?.userposts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getMyPost();
    }
  }, [id]);

  return (
    <MypostContext.Provider value={{ mypost, setMypost, getMyPost, loading }}>
      {children}
    </MypostContext.Provider>
  );
};

export { MypostContext, MyPostProvider };
