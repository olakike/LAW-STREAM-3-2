import  {} from  "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import LandingPage from "./Screen/LandingPage";
import Landing from "./Screen/Landing";
import Signin from "./Screen/Signin";
import Signup from "./Screen/Signup"
import Dashboard from "./Screen/Dashboard";
import Contentdrawer from "./Screen/Contentdrawer";

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
      <Stack.Screen options={{headerShown:false}} name='Welcome' component={LandingPage} />
      <Stack.Screen options={{headerShown:false}} name='StreamDescription' component={Landing} />
      <Stack.Screen options={{headerShown:false}} name='Signin' component={Signin} />
      <Stack.Screen options={{headerShown:false}} name='Signup' component={Signup} />
      <Stack.Screen options={{headerShown:false}} name='MyDashboard' component={Dashboard} />
      <Stack.Screen options={{headerShown:false}} name='content' component={Contentdrawer} />
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
