import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Posts from '../Component/Posts'
import axios from 'axios'

const MyPost = () => {
  const [mypost, setmypost] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {

  }, [mypost]);
  const getmyPost = async () => {
    try {
      setloading(true);
      const { data } = await axios.get('/post/user-post');
      setmypost(data?.userposts)
      setloading(false);

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getmyPost();
  }, []);
  return (

    <Posts item={mypost} mypostscreen={true} />
  )
}

export default MyPost

const styles = StyleSheet.create({})