import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/authcontext';
import Home from '../Screen/Home';
import Register from '../Screen/auth/Register';
import Login from '../Screen/auth/Login';
import Headermenu from './Headermenu';
import Post from '../Screen/Post';
import About from '../Screen/About';
import Account from '../Screen/Account';
import MyPost from '../Screen/MyPost';
import Friends from '../Screen/Friends';
import Friendscompo from '../Component/Friendscompo';
import Chatscreen from '../Screen/Chatscreen';

const Stack = createNativeStackNavigator();

const Screenmenu = () => {
  const [state] = useContext(AuthContext);
  const authUser = state?.user && state?.token;

  return (
    <Stack.Navigator initialRouteName={authUser ? 'Home' : 'Login'}>
      {authUser ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerRight: () => <Friendscompo />
            }}
          />
          <Stack.Screen
            name="Post"
            component={Post}

          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ headerBackVisible: false }}

          />
          <Stack.Screen
            name="Account"
            options={{ headerBackVisible: false, headerRight: () => <Headermenu /> }}
            component={Account}

          />
          <Stack.Screen name='Myposts' component={MyPost} options={{ headerShown: false }} />
          <Stack.Screen name='Friend' component={Friends} />
          <Stack.Screen name='Message' component={Chatscreen} options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      )}

    </Stack.Navigator>
  );
};

export default Screenmenu;

const styles = StyleSheet.create({});
