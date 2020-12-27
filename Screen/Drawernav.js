import React from 'react';
import { View, Image, StyleSheet, Text, Button,SafeAreaView, } from 'react-native';
import { } from 'react-native-gesture-handler';
import {Ionicons} from "@expo/vector-icons"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Entypo, } from "@expo/vector-icons"

import Home from "./Home";
import Search from "./Search";
import Profile from './Profile';
import ContentPage from './ContentPage';
import Landing from './Landing';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

const Drawer = createDrawerNavigator();

function Drawernav({navigation}) {
    return (
      
 <Drawer.Navigator 
 screenOptions={({route})=>({
     tabBarIcon:({ focused,color,size})=>{
       let iconName;
       if (route.name ==="Home"){
         iconName="home"
       } else if (route.name === 'Search') {
         iconName = "md.search"
       } else if (route.name === 'Profile') {
         iconName = 'users'
       }else if (route.name === 'M-Lesson') {
         iconName = 'ios-folder'
       }else if (route.name === 'Chat Session') {
         iconName = ''
       }else if (route.name === 'Lesson History') {
         iconName = ''
       }else if (route.name === 'Log-Out') {
         iconName = 'md-log-out'
     }
     return <Entypo name={iconName} size={45} color={color}/>
 }
   })}
   tabBarOptions={{
activeTintColor:"green",
inactiveTintColor: "gray",
labelStyle:{
fontSize:30
},
iconStyle:{
size:50
},
showLabel:false
}}
>
   <Drawer.Screen name=" My Profile" component={Dashboard} />
   <Drawer.Screen name="Home" component={Home} />
   <Drawer.Screen name="Search" component={Search} />
   <Drawer.Screen name="M-Lesson" component={ContentPage} />
   <Drawer.Screen name="Chat Session" component={LandingPage} />
   <Drawer.Screen name="Lesson History" component={LandingPage} />
   <Drawer.Screen name="Log-Out" component={Landing} />
</Drawer.Navigator>
    );
}

export default Drawernav;
