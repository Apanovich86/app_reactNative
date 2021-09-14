import React from 'react';
import {StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";
const  UserDetails=(props)=> {
    console.log(props);
    let {route:{params: {data}}, navigation} = props;
    return <View>
        <Text>{data.name}- -{data.email}</Text>
    </View>;
};
export default UserDetails;
let styles=StyleSheet.create({});