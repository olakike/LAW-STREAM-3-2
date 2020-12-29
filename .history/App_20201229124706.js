import  {} from  "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import LandingPage from "./Screen/LandingPage";
import Landing from "./Screen/Landing";
import Signup from './Screen/Signup';
import Signin from './Screen/Signin';
import UserDashboard from "./Screen/UserDashboard";
import ContentPage from "./Screen/ContentPage";
import Dashboard from "./Screen/Dashboard";
import Drawernav from "./Screen/Drawernav";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="green" barStyle="light-content"/>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
       headerTitleAlign: "center",
       headerStyle:{
         backgroundColor: "#728C00"
       },
       headerTintColor: "#fff",
       headerTitleStyle:{
         fontWeight: "bold"
       }
     }}
     >
     
      <Stack.Screen options={{headerShown:false}} name='Welcome' component={Dashboard} />
      <Stack.Screen options={{headerShown:false}} name='content' component={ContentPage} />
      <Stack.Screen options={{headerShown:false}} name='Drawer'component={Drawernav} />
      <Stack.Screen options={{headerShown:false}} name='ScreenDetails' component={LandingPage} />
      <Stack.Screen options={{headerShown:false}} name='description' component={Landing} />
    </Stack.Navigator>
  </NavigationContainer>
  </>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
