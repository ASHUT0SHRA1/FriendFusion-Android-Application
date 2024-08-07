import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { FlatList } from 'react-native';
import heartIcon from '../Assets/heart.png'
import trashIcon from '../Assets/trash.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import pencil from '../Assets/pencil.png'
import EditModal from './EditModal';
import { useNavigation } from "@react-navigation/native";

const Posts = ({ item, mypostscreen }) => {
  const navigation = useNavigation() ; 
  const [modalVisible, setModalVisible] = useState(false);
  const [post, setPost] = useState({});
  const handleDelete = (id) => {
    Alert.alert("Attention!", "Are you sure you want to delete this post",
      [{
        text: "Cancel",
        onPress: () => {
          console.log('cancel press')
        }
      }, {
        text: "Delete",
        onPress: () => {
          console.log('Delete');

          handleDeletePost(id);
          navigation.push('About')

          

        }
      }
      ]);

  }

  const handleDeletePost = async (id) => {
    try {
      const { data } = await axios.delete(`/post/delete-post/${id}`)
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <View>
      {mypostscreen && (
        <EditModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          post={post}
        />
      )}
      {
        item?.map((items, i) => (
          <View style={styles.postContainer} key={i}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Text style={styles.title}>{items?.title}</Text>
              <View style= {{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal : 10 ,
            }}>
              {
                mypostscreen ? <TouchableOpacity onPress={() =>
                  handleDelete(items?._id)
                  // console.log(items)

                }>
                  <Image source={trashIcon} style={{ height: 25, width: 25 , marginRight: 20 }} />

                </TouchableOpacity> : null
              }
              {
                mypostscreen ? <TouchableOpacity onPress={() => {
                  setPost(items), setModalVisible(true);
                }}
                >
                  <Image source={pencil} style={{ height: 30, width: 30 }} />

                </TouchableOpacity> : null
              }
                </View>
            </View>
            <Text style={styles.description}>{items?.description}</Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderTopWidth: 0.5,
              marginTop: 10,
              alignItems: 'center',
            }}>
              <View style={styles.infoContainer}>
                <Image source={heartIcon} style={{ height: 20, width: 20, marginRight: 10 }} />
                <Text>Like</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.postedBy}>{items?.postedBy?.name}</Text>
                <Text style={styles.date}>{moment(items?.createdAt).format('DD-MM-YYYY')}</Text>
              </View>


            </View>
          </View>
        ))
      }
    </View>
    // <FlatList
    //   data={item}
    //   renderItem={({ item  }) => (
    //     <View style={styles.postContainer}>
    //       <Text style={styles.title}>{item?.title}</Text>
    //       <Text style={styles.description}>{item?.description}</Text>
    //       <View style={{
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         borderTopWidth : 0.5, 
    //         marginTop : 10 ,
    //         alignItems : 'center',
    //       }}>
    //         <View style={styles.infoContainer}>
    //           <Image source={heartIcon} style={{ height: 20, width: 20, marginRight: 10 }} />
    //           <Text>Like</Text>
    //         </View>
    //         <View style={styles.infoContainer}>
    //           <Text style={styles.postedBy}>{item?.postedBy.name}</Text>
    //           <Text style={styles.date}>{moment(item?.createdAt).format('DD-MM-YYYY')}</Text>
    //         </View>


    //       </View>
    //     </View>
    //   )}
    //   keyExtractor={item => item?._id}

    // />


  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginVertical: 4,
  },
  infoContainer: {
    marginTop: 10,
    flexDirection: "row",
    margin: 10,
  },
  postedBy: {
    fontSize: 13,
    color: 'black',
    marginRight: 10
  },
  date: {
    fontSize: 12,
    color: '#777',
  },
});

export default Posts;
