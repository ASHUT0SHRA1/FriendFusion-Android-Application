import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Footer from '../Menus/Footer'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import axios from 'axios'
import { PostContext } from '../context/postcontext'
import SubmitBtn from '../Component/SubmitBtn'
import InputTextCompo from '../Component/InputTextCompo'

const Post = ({ navigation }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [loading, setloading] = useState(false);
  const [post, setpost, getAllPosts] = useContext(PostContext);
  const handlePost = async () => {
    setloading(true);
    try {
      if (!title) {
        Alert.alert("please fill title");
      }
      if (!description) {
        Alert.alert("please add description");

      }
      const { data } = await axios.post(`/post/create-post`, { title, description });
      setloading(false)
      console.log(data?.post);
      setpost([...post, data?.post])
      Alert.alert(data?.message);
      await getAllPosts();
      navigation.push("Home");

    } catch (error) {
      Alert.alert(error.response.data.message);
      console.log(error);

    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        
      <View >
          <View style={{alignItems:'center'}}>
          <Text style={styles.heading}>
            Create a Post
          </Text>
          </View>
          <InputTextCompo title={'Add title'}  value={title}
                setvalue={settitle} />

          <InputTextCompo title={'Add Description'} isMulti={true} numbersoflines={6} value={description} setvalue={setdescription}/>
        </View>
        <View style={{marginTop : 20}}>
        <SubmitBtn title={'Post'} handleSubmit={handlePost}/>
        </View>
      </ScrollView>



      <Footer />
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 30,
    margin: 1
  },
  heading: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  inputbox: {
    textAlignVertical: 'top',
    backgroundColor: "#ffffff",
    width: 350,
    marginTop: 30,
    fontSize: 16,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  btn: {
    backgroundColor: "black",
    width: 250,
    marginTop: 30,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})