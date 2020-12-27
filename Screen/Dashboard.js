import React from 'react';
import { View, Image, StyleSheet, Text, Button,SafeAreaView, } from 'react-native';
import { } from 'react-native-gesture-handler';
import {Ionicons} from "@expo/vector-icons"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Entypo, FontAwesome } from "@expo/vector-icons"

import Search from "./Search";
import ContentPage from './ContentPage';
import Landing from './Landing';
import LandingPage from './LandingPage';
import MyDashboard from './MyDashboard';

const Drawer = createDrawerNavigator();

function Dashboard() {
    return (
      <Drawer.Navigator 
      screenOptions={({route})=>({
          drawerIcon:({ focused,color,size})=>{
            let iconName;
            if (route.name ==="My Dashboard"){
              iconName="home"
            } else if (route.name === 'Search') {
              iconName = "search"
            } else if (route.name === 'Profile') {
              iconName = 'user'
            }else if (route.name === 'M-Lesson') {
              iconName = 'folder'
            }else if (route.name === 'Chat Session') {
              iconName = 'wechat'
            }else if (route.name === 'Lesson History') {
              iconName = 'history'
            }else if (route.name === 'Log-Out') {
              iconName = "sign-out"
          }
          return <FontAwesome name={iconName} size={45} color={color}/>
      }
        })}
        Options={{
     activeTintColor:"green",
     inactiveTintColor: "gray",
     backgroundColor:"#477A71",
     labelStyle:{
     fontSize:30
     },
     iconStyle:{
     size:30
     },
     showLabel:true
     }}
     >
     <Drawer.Screen 
        options={{
          headerTitleAlign:"center",
          headerStyle:{ 
            backgroundColor:"#54C571"
           },
           headerTitleStyle:{
             color:"white"
           },
           headerTintColor:{
             color:"white"
           }
         }} options={{headerShown:true}} name=' My Dashboard' component={MyDashboard}/>
        <Drawer.Screen
         options={{
          headerTitleAlign:"center",
          headerStyle:{ 
            backgroundColor:"#54C571"
           },
           headerTitleStyle:{
             color:"white"
           },
           headerTintColor:{
             color:"white"
           }
         }} options={{headerShown:true}} name="Search" component={Search} />
        <Drawer.Screen 
        options={{
          headerTitleAlign:"center",
          headerStyle:{ 
            backgroundColor:"#54C571"
           },
           headerTitleStyle:{
             color:"white"
           },
           headerTintColor:{
             color:"white"
           }
         }} options={{headerShown:true}} name="M-Lesson" component={ContentPage} />
        <Drawer.Screen 
        options={{
          headerTitleAlign:"center",
          headerStyle:{ 
            backgroundColor:"#54C571"
           },
           headerTitleStyle:{
             color:"white"
           },
           headerTintColor:{
             color:"white"
           }
         }} options={{headerShown:true}} name="Chat Session" component={LandingPage} />
        <Drawer.Screen 
       options={{
        headerTitleAlign:"center",
        headerStyle:{ 
          backgroundColor:"#54C571"
         },
         headerTitleStyle:{
           color:"white"
         },
         headerTintColor:{
           color:"white"
         }
       }} options={{headerShown:true}} name="Lesson History" component={LandingPage} />
        <Drawer.Screen 
        options={{
          headerTitleAlign:"center",
          headerStyle:{ 
            backgroundColor:"#54C571"
           },
           headerTitleStyle:{
             color:"white"
           },
           headerTintColor:{
             color:"white"
           }
         }} options={{headerShown:true}}name="Log-Out" component={Landing} />
     </Drawer.Navigator>
    );
}

export default Dashboard;
