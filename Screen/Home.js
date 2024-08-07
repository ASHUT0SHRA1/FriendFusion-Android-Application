import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { AuthContext } from '../context/authcontext';
import Footer from '../Menus/Footer';
import { PostContext } from '../context/postcontext';
import Posts from '../Component/Posts';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';

const Home = () => {
  const [state, setState] = useContext(AuthContext);
  const [posts, getAllPosts] = useContext(PostContext);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => { }, [getAllPosts]);
  // refresh controll
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getAllPosts;
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />}

      >
        <Posts item={posts} />

      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 1,

  },
});

export default Home;
