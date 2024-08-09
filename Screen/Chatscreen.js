import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import userIcon from '../Assets/user.png'
import backIcon from '../Assets/back.png'
import { useNavigation } from '@react-navigation/native';

const Chatscreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userid, selecteduserid } = route.params;
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [recepientName, setrecepientName] = useState('');

  // Fetch messages on mount
  useEffect(() => {
    const intervalId = setInterval(async () => {
      getMessages(userid, selecteduserid);
    }, 2000); // Refresh every 2 seconds (2000 milliseconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [userid, selecteduserid]);
  const formatTime = (time) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(time).toLocaleString("en-US", options);
  };

  // Function to fetch messages using Axios
  const getMessages = async (userId, selectedUserId) => {
    try {
      const response = await axios.post(`message/getmessage/${userId}/${selectedUserId}`);
      setMessages(response.data.messages);
      setrecepientName(response.data.recepientId.name);
      console.log(recepientName)
    } catch (error) {
      console.error(error);

    }
  };

  // Function to send message using Axios
  const sendMessage = async () => {
    if (!messageText) return; // Handle empty message

    try {
      const response = await axios.post(`/message//getmessage/${userid}/${selecteduserid}/message`, {
        messageType: 'text', // Assuming text messages for now
        messageText,
      });
      setMessageText(''); // Clear message input after sending
      getMessages(userid, selecteduserid); // Update messages
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Message list */}
      <View style={{ height: 45, width: 'auto', flexDirection: 'row', alignItems: 'center' }}>
        <Pressable onPress={() => navigation.replace('Friend')}>
          <Image source={backIcon} style={{ height: 20, width: 20, marginLeft: 20 }} />
        </Pressable>
        <Image source={userIcon} style={{ height: 20, width: 20, borderRadius: 10, marginLeft: 10 }} />
        <Text style={{ fontSize: 18, color: 'black', marginLeft: 10 }}>{recepientName}</Text>
      </View>
      <ScrollView
        ref={ref => { this.ScrollView = ref }}
        onContentSizeChange={() => this.ScrollView.scrollToEnd({ animated: true })}
      >
        <View style={styles.messageList}>
          {messages.map((message, index) => (
            <View key={index} style={message.senderId._id === userid ? styles.myMessage : styles.receivedMessage}>
              <Text style={styles.messageText}>{message.message}</Text>
              <Text style={{ fontSize: 11, textAlign: 'right', color: 'black' }}>{formatTime(message.timeStamp)} </Text>

            </View>
          ))}
        </View>

      </ScrollView>
      {/* Message input and send button */}
      <View style={styles.messageInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          onChangeText={setMessageText}
          value={messageText}
          multiline={true}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Chatscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#ffff'

  },
  messageList: {
    flex: 1,
    padding: 10,
  },
  myMessage: {
    backgroundColor: '#0a81d1',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginBottom: 5,
    width: '70%',
    borderRadius: 10
  },
  receivedMessage: {
    backgroundColor: '#44cfcb',
    padding: 10,
    marginBottom: 5,
    width: '70%',
    borderBottomEndRadius: 15,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 20,

  },
  messageText: {
    fontSize: 16,
  },
  messageInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#94fbab',
    padding: 8,
    borderRadius: 5,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#388659',
    borderRadius: 5,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});