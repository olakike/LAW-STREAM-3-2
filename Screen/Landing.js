
import React from 'react';
import { View, Image, StyleSheet, Text, Button,SafeAreaView, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Landing({navigation}) {
    return (
    <SafeAreaView>
    <View style={styles.container} >
        <View>
        <Image style={ styles.Logoimage} source={require("../assets/New folder/LOGO.png") } />
        <Image style={ styles.image} source={require("../assets/New folder/Mask Group.png") } />
        </View> 
        <View style={styles.textcontainer}>
        <Text style={ styles.ftext}> Learning at your own convinience </Text>
        <Text style={ styles.stext}> Choose the class you belong to get started  </Text>
        </View>
        <View style={ styles.buttoncontainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Landing2')} >
        <Text style={styles.buttonText} > STREAM 1 </Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')} >
        <Text style={styles.buttonText} > STREAM 2 </Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')} >
        <Text style={styles.buttonText} > STREAM 3 </Text>
        </TouchableOpacity> 
        <View style={styles.landing}>
            <TouchableOpacity style={styles.swipe} onPress={()=> navigation.navigate('Landing')}/>
            <TouchableOpacity style={styles.swipe} onPress={()=> navigation.navigate('Landing2')}/>
        </View>
        <View style={styles.textcontainer}>
        <Text style={styles.ptext}>Powered by Stream-3 team-2</Text> 
        </View>
        </View>
    </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#FFFFFF",
        justifyContent:"center",
        width:"100%",
        position:"absolute",
    },
    image:{
        width:408.26,
        height:408.28,
        alignSelf:"center",
    },
    ftext:{
        fontSize: 18,
        lineHeight:23,
        fontStyle:"normal",
        width:"280",
        height:"23",
        alignContent:"center",
        justifyContent:"space-evenly",
        alignSelf:"center",
        padding:10
    },
    stext:{
        fontSize: 24,
        justifyContent:"space-evenly",
        fontWeight:"600",
        textAlign:"center",
        lineHeight:30,
    },
    ptext:{
        fontSize: 12,
        justifyContent:"space-evenly",
        textAlign:"center",
        marginTop:"20"
    },
    buttonText:{
        color:"#477A71",
        fontStyle:'normal',
        fontWeight:"600",
        fontSize:"30",
        textAlign:"center",
        padding:8
    },
    textcontainer:{
        marginBottom:10,
        padding: 10
    },
    button: {
        backgroundColor: "#ffffff",
        marginBottom:10,
        width: 290,
        height: 40,
        borderRadius:10,
        bordercolor:"#477A71",
        borderWidth:3, 
        alignContent:"center"
     },
     swipe: {
        backgroundColor: "#F0A64A",
        width: 30,
        height: 5,
        bordercolor:"#F0A64A",
        borderRadius:"10",
        flexDirection:"row",
        borderRadius:10
     },
      buttoncontainer: {
        backgroundColor:"#ffffff",
        alignContent:"center",
        alignSelf:"center"
      },
      Logoimage:{
        width: 62 ,
        height: 64,
        alignSelf:"center",
        marginTop:10,
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

