import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authcontext';
import Footer from '../Menus/Footer';

import UserImg from '../Assets/account.png'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import MyPost from './MyPost';
import settingIcon from '../Assets/gear.png'
import UserupdateModal from '../Component/UserupdateModal';
import { PostContext } from '../context/postcontext';
const Account = () => {
    const [state, setstate] = useContext(AuthContext);
    const { user } = state;
    const [loading, setloading] = useState(false);
    const [name, setname] = useState(user?.name);
    const [email] = useState(user?.email);
    const [mypost] = useContext(PostContext)
    const [image ,setimage] = useState(user?.image);
    const [password, setpassword] = useState(user?.password);
    const [visible, setvisible] = useState(false);
    const handleUpdate = async () => {
        try {
            setloading(true);
            const upadteUser = { name, email, password , image };
            const { data } = await axios.put('/auth/update', upadteUser);
            setloading(false);
            let UD = JSON.stringify(data);
            setstate({ ...state, user: UD?.upadteUser })
        } catch (error) {
            Alert.alert(error.response.data.message);
            setloading(false)
        }
    }
    return (
        <View style={styles.container}>
            <>
                {
                    visible ? <UserupdateModal handleUpdate={handleUpdate} visible={visible} setVisible={setvisible} state={state} name={name} setname={setname} password={password} setpassword={setpassword} loading={loading} setloading={setloading} image={image} setimage={setimage} /> : null
                }
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginLeft: 10, borderBottomWidth: 1, paddingBottom: 10, marginRight: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={image ?  {uri : image} : UserImg} style={{ height: 80, width: 80, borderRadius: 30 }} />
                            <View style={{ 
                                marginLeft: 10,   
                                }}>
                                <Text style={{ fontSize: 17, fontWeight: '400', margin: 5, color: 'black'}}>{name}</Text>
                                <Text style={{ fontSize: 14, fontWeight: '600', margin: 5, color: 'blue'  }}>{email}</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => setvisible(!visible)}>
                                <Image source={settingIcon} style={{ height: 40, width: 40 }} />
                            </TouchableOpacity>

                        </View>

                    </View>


                </View>
                <ScrollView>
                    <MyPost />
                </ScrollView>
            </>

            <Footer />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        marginTop: 10,
        margin: 1
    },

})
export default Account; 