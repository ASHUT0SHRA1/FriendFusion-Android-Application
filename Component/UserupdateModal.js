import { Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-crop-picker';
import UserImg from '../Assets/account.png'

const UserupdateModal = ({ handleUpdate ,image ,  setimage ,  visible, setVisible, state, setname, setpassword, loading, name, password, setloading }) => {
    const { user, token } = state;
    const [email] = useState(user?.email);
    const handleUpdateCancel = () => {
        setVisible(!visible)
        setname(user?.name);
        setpassword(user?.password)
    }
    const handlePhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true, 
            includeBase64 :true , 
            avoidEmptySpaceAroundImage : true ,
            freeStyleCropEnabled : true 
          }).then(image => {
            console.log(image);
            const data = `data:${image.mime};base64,${image.data}`
            setimage(data);
          });
    }
    return (
        <View style={styles.centeredView}>
            <Modal animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={()=>handlePhoto()}>
                                <Image source={image ?  {uri : image}  : UserImg } style={{ height: 80, width: 80, borderRadius: 30 }} />
                            </TouchableOpacity>
                        </View>
                        <View >

                            <View style={styles.inpContainer} >
                                <Text style={styles.textt}>
                                    Name
                                </Text>
                                <TextInput onChangeText={(text) => setname(text)} value={name} style={styles.textinp} />
                            </View>

                            <View style={styles.inpContainer}>
                                <Text style={styles.textt}>
                                    Email
                                </Text>
                                <TextInput value={state?.user.email} style={styles.textinp}
                                    editable={false} />
                            </View>

                            <View style={styles.inpContainer}>
                                <Text style={styles.textt}>
                                    password
                                </Text>
                                <TextInput secureTextEntry={true} onChangeText={(text) => { setpassword(text) }} value={password} style={styles.textinp} />

                            </View>

                        </View>
                        <View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.btn} onPress={handleUpdate}>
                                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                                        {!loading ? "Update Profile" : "please wait"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.btn} onPress={handleUpdateCancel}>
                                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                                        {!loading ? "Cancle" : "please wait"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default UserupdateModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    inpContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textt: {
        fontSize: 16,
        fontWeight: '700',
    },
    textinp: {
        borderColor: 'black',
        marginLeft: 10,
        fontSize: 14,
        paddingLeft: 20,
        borderRadius: 10,
        width: 250,
        backgroundColor: 'white'
    },
    btn: {
        backgroundColor: 'black',
        height: 40,
        width: 200,
        borderRadius: 15,
        marginTop: 15,
        justifyContent: 'center'

    }

})