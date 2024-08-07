import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import InputTextCompo from '../../Component/InputTextCompo';
import SubmitBtn from '../../Component/SubmitBtn';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/authcontext';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(AuthContext);

  const handleSubmit = async () => {
    console.log('clicked login')
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert('Please fill all fields');
        setLoading(false);
        return;
      }
      const { data } = await axios.post(`/auth/login`, { email, password });
      setState(data);
      await AsyncStorage.setItem('@auth', JSON.stringify(data));
      setLoading(false);
      navigation.navigate('Home');
    } catch (error) {
      setLoading(false);
      console.log(error);
      Alert.alert('Login failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>FriendFusion</Text>
      <InputTextCompo
        title={'Email'}
        secureText={false}
        keyboardType={'Email address'}
        value={email}
        setvalue={setEmail}
      />
      <InputTextCompo
        title={'Password'}
        secureText={true}
        keyboardType={'Password'}
        value={password}
        setvalue={setPassword}
      />
      <SubmitBtn handleSubmit={handleSubmit} title={'Login'} loading={loading} />
      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>
          Don't have an Account? Please <Text style={styles.link}>Register</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e1d5c9',
  },
  pageTitle: {
    fontSize: 30,
    letterSpacing : 1, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e2225',
    marginBottom: 20,
    fontStyle :"italic"
  },
  linkText: {
    textAlign: 'center',
  },
  link: {
    color: 'red',
  },
});
