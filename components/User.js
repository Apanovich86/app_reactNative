import {Text, View, Button} from "react-native";
import React from 'react';
import { StyleSheet } from 'react-native';

const User = (props) => {
    let {item, nav:{navigate}} = props;
    console.log(props);
    let onPress = () => {
        navigate ('uDetails', {data:item});
    };
    return <View style={[styles.userBox, styles.margins, styles.sizes]}>
        <Text style={[styles.align]}> {item.name}</Text>
        <Button title={'user details'} onPress={onPress}/>
    </View>;
}

export default User;

let styles = StyleSheet.create({
    userBox:{
        flex: 1,
        backgroundColor: 'silver',
    },
    margins: {
        marginBottom: 3,
    },
    sizes:{
        width: '70%',
        height: 100
    },
    align: {
        textAlign: "center"
    }
});