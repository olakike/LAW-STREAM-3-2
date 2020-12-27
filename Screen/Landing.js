
import React from 'react';
import { View, Image, StyleSheet, Text, Button,SafeAreaView, } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


function Landing({navigation}) {
    return (
    <SafeAreaView style={styles.container}>
    <View>
        <Image style={ styles.Logoimage} source={require("../assets/New folder/logo.png") } />
    </View> 
    <View style={ styles.buttoncontainer}>
        <Text style={styles.stext} onPress={()=> navigation.navigate("Signup")}> Stream 1</Text>
        <Text style={styles.ftext} onPress={()=> navigation.navigate("Signup")}> Web Development (Beginners) </Text>
        <Text style={styles.stext} onPress={()=> navigation.navigate("Signup")}> Stream 2 </Text>
        <Text style={styles.ftext} onPress={()=> navigation.navigate("Signup")}> Web Development (Advanced) </Text>
        <Text style={styles.stext} onPress={()=> navigation.navigate("Signup")}> Stream 3 </Text>
        <Text style={styles.ftext} onPress={()=> navigation.navigate("Signup")}> Mobile App Development 
            (React native) </Text>
    </View>
    <View style={styles.landing}>
            <TouchableOpacity style={styles.swipe} onPress={()=>navigation.navigate('Landing')}/>
            <TouchableOpacity style={styles.swipe} onPress={()=>navigation.navigate('LandingPage')}/>   
    </View>
    <View style={styles.textcontainer}>
        <Text style={styles.ptext}>Powered by Stream-3 team-2</Text> 
    </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#477A71",
        justifyContent:"center",
        width:"100%",
        height:"100%"
    },
    ftext:{
        fontSize: 24,
        lineHeight:30,
        fontStyle:"normal",
        width:"355",
        height:"30",
        alignContent:"center",
        justifyContent:"space-evenly",
        alignSelf:"center",
        padding:20,
        fontFamily: 'Mulish',
        color:"#FFFFFF",
        textAlign:"center"
    },
    stext:{
        fontSize: 36,
        justifyContent:"space-evenly",
        fontWeight:"800",
        textAlign:"center",
        lineHeight:45,
        fontFamily: 'Mulish',
        color:"#F0A64A"
    },
    ptext:{
        fontSize: 12,
        justifyContent:"space-evenly",
        textAlign:"center",
        fontFamily: 'Mulish',
        marginTop:"20"
    },
    buttonText:{
        color:"#477A71",
        fontStyle:'normal',
        fontWeight:"600",
        fontSize:"30",
        textAlign:"center",
        padding:8,
        fontFamily: 'Mulish',
    },
    textcontainer:{
        marginBottom:10,
        padding: 10
    },
     swipe: {
        backgroundColor: "#F0A64A",
        width: 26,
        height: 3,
        bordercolor:"#F0A64A",
        borderRadius:"10",
        flexDirection:"row",
     },
      buttoncontainer: {
        alignContent:"center",
        alignSelf:"center",
        paddingVertical:50,
        marginBottom:50,
      },
      Logoimage:{
        width: 116 ,
        height: 118,
        alignSelf:"center",
        marginTop:30,
        marginBottom:30
      },
      landing:{
          flexDirection:"row",
          width:80,
          alignSelf:"center",
          marginTop:"10",
          marginBottom:"10",
          marginHorizontal:10,
          justifyContent:"space-evenly",
         
      }
})
export default Landing;

