import React from 'react';
import {StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";
const  User=({item})=> {
    return <View style={[styles.userBox]}>
        <Text style={[styles.userBox]}>{item.name}</Text>
    </View>;
};
export default User;
let styles=StyleSheet.create({
    userBox:{
        flex:1,
        backgroundColor: 'silver',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 3,
        width: '70%',
        height: 100
    },
});