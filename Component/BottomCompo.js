import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BottomCompo = ({ name, img, handlef }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={handlef}>
            <Image source={img} style={styles.imageicon} />
            <Text style={styles.textt}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    imageicon: {
        height: 25,
        width: 25,
    },
    textt: {
        fontSize: 11,
        fontWeight: '700',
        textAlign: 'center'
    },
    btn: {
        height: 50,
        width: 60,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default BottomCompo;
