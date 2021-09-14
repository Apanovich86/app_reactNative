import React from 'react';
import {StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";

const User = (props) => {
    let {item, nav: {navigate}} = props;
    console.log(props);
    let onPress = () => {
        navigate('uDetails', {data: item});
    }
    return <View style={[styles.userBox]}>
        <Text style={[styles.userBox]}>{item.name}</Text>
        <Button title={'user details'} onPress={onPress}/>
    </View>;
};
export default User;
let styles = StyleSheet.create({
    userBox: {
        flex: 1,
        backgroundColor: 'silver',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 3,
        width: '70%',
        height: 100
    },
});