import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from "./components/Users";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Home";
import UserDetails from "./components/screens/UserDetails";


let StackNavigator = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <StackNavigator.Navigator initialRouteName="Users page">
              <StackNavigator.Screen name={'Home'} component={Home}/>
              <StackNavigator.Screen name={'Users page'} component={Users}/>
              <StackNavigator.Screen name={'uDetails'} component={UserDetails}/>
          </StackNavigator.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
