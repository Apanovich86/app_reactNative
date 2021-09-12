import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import User from "./User";
import {getUsers} from "../services/api.service";

const Users = () => {
    let [users, setUsers] = useState();
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);
    return (
        <View style={styles.base}>
            <FlatList
                data={users}
                renderItem={({item}) => <User item={item}/>}
                keyExtractor={item => '' + item.id}
            />
        </View>
    );
};
export default Users;

let styles = StyleSheet.create({
    base: {
        flex: 1,
        height: '100%'
    }
});