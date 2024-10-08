import { StyleSheet, View } from 'react-native';
import React from 'react';
import BottomCompo from '../Component/BottomCompo';
import { useNavigation, useRoute } from '@react-navigation/native';

// Importing icons
// import homeIcon from '../Assets/home.png';
import homeIcon from '../Assets/house.png';
import homeIconOutline from '../Assets/houseOutline.png';

import menuIcon from '../Assets/social-mediaoutline.png';
import menuIconOutline from '../Assets/social-media.png';

import userIcon from '../Assets/account.png';
import userIconOutline from '../Assets/accountOutline.png';

import Friends from '../Assets/friendshipoutline.png'
import Friendsfilled from '../Assets/friendship.png'
const Footer = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const handleNavigation = (page) => {
        navigation.navigate(page);
    };

    const getIcon = (page, icon, iconOutline) => {
        return route.name === page ? iconOutline : icon;
    };

    return (
        <View style={styles.container}>
            <BottomCompo name='Home' img={getIcon('Home', homeIcon, homeIconOutline)} handlef={() => handleNavigation('Home')} />
            <BottomCompo name='Post' img={getIcon('Post', menuIcon, menuIconOutline)} handlef={() => handleNavigation('Post')} />
            <BottomCompo name='About' img={getIcon('About', Friendsfilled, Friends)} handlef={() => handleNavigation('About')} />
            <BottomCompo name='Account' img={getIcon('Account', userIcon, userIconOutline)} handlef={() => handleNavigation('Account')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        // marginHorizontal: 10,
        backgroundColor: "#dce1e9"
    },
});

export default Footer;
