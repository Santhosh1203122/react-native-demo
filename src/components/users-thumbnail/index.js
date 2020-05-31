import React from 'react';
import {View, Image, StyleSheet, Text } from 'react-native';

function getUserProfileThumbnail(userDatas) {
    const total = userDatas.length;
    const usersThumbnailData = total <= 3 ? userDatas : userDatas.slice(0,3);
    const usersThumbnail = usersThumbnailData.map((userData, index) =>
            <Image 
                source={{uri: userData.src}} 
                style={[styles.image, {zIndex: (usersThumbnailData.length - index), right: -((usersThumbnailData.length - index) * 12)}]} 
            />
    )
    const extraCount = total - usersThumbnailData.length;
    if(extraCount) {
        const extraElement = <View style={[styles.image, styles.extra]} ><Text style={styles.extraValue}>+{extraCount}</Text></View>
        usersThumbnail.push(extraElement)
    }
    return usersThumbnail
}

function UsersThumbnail(props) {
    return (
        <View style={styles.holder}>
            {getUserProfileThumbnail(props.users)}
        </View>
    );
};

const styles = StyleSheet.create({
    holder: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    image: {
        width: 25, 
        height: 25,
        borderRadius: 15,
        position: 'relative',
        borderColor: 'white',
        borderWidth: 1
    },
    extra: {
        backgroundColor: 'blue',
        // left: -36,
        textAlign: 'center',
        justifyContent: 'center'
    },
    extraValue: {
        color: 'white',
    } 
})

export default UsersThumbnail;