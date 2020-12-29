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

const Drawer = createDrawerNavigator();

function Contentdrawer({navigation}) {
    return (
      
 <Drawer.Navigator 

   Options={{
activeTintColor:"green",
inactiveTintColor: "gray",
labelStyle:{
fontSize:30
},
iconStyle:{
size:50
},
showLabel:false,
backgroundColor:"#477A71"
}}
>
<Drawer.Screen options={{
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
         }} options={{headerShown:true, }} name="M-lessons" component={ContentPage} />
<Drawer.Screen options={{
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
         }} options={{headerShown:true}} name="Lesson 1- Introduction to React" component={Home} />
   <Drawer.Screen name="Lesson 2- Introduction to React"  component={Profile} />
   <Drawer.Screen name="Lesson 3- Introduction to React"  component={Home} />
   <Drawer.Screen name="Lesson 4- Introduction to React" component={Search} />
   <Drawer.Screen name="Lesson 5- Introduction to React"  component={LandingPage} />
   <Drawer.Screen name="Lesson 6- Introduction to React"  component={LandingPage} />
   <Drawer.Screen name="Lesson 7- Introduction to React"  component={Landing} />
   <Drawer.Screen name="Lesson 8- Introduction to React"  component={Profile} />
   <Drawer.Screen name="Lesson 9- Introduction to React"  component={Home} />
   <Drawer.Screen name="Lesson 10- Introduction to React" component={Search} />
   <Drawer.Screen name="Lesson 11- Introduction to React"  component={LandingPage} />
   <Drawer.Screen name="Lesson 12- Introduction to React"  component={LandingPage} />
   <Drawer.Screen name="Lesson 13- Introduction to React"  component={Landing} />
</Drawer.Navigator>
    );
}
export default Contentdrawer;