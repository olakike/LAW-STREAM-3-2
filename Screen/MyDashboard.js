import React from 'react';
import { View, Image, StyleSheet, Text, Button,SafeAreaView, } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from "@expo/vector-icons"
import {createDrawerNavigator} from "@react-navigation/drawer";




const Drawer = createDrawerNavigator();

function MyDashboard({navigation}) {
    return (
    <SafeAreaView style={styles.container}>
            <View style={styles.icon}> 
              <Image  style={styles.Logoimage} source={require("../assets/New folder/logo2.png")}/>
               <Text style={styles.ftext2}>Welcome, User</Text> 
            </View>
            <View>
               <Image style={styles.WelcomeImage} source={require("../assets/New folder/video imag.jpg")}/> 
            </View>
            <View style={styles.userinter}>
                <Image style={styles.lessonimage} source={require('./../assets/New folder/content img.jpg')} />
                    <View style={styles.textcontainer}>
                     <Text style={styles.stext}>Mobile App Development</Text>
                    <Text style={styles.ptext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    <Text style={styles.ptext}>Mattis amet nisl, euismod bibendum arcu platea eros.</Text>
                    <Text style={styles.ptext}>ornare. Fermentum aliquam sit convallis ipsum.</Text>
                     <TouchableOpacity onPress={()=> navigation.navigate("ContentPage")}  style= {styles.button}>
                    <Text style={styles.buttonText}>GET STARTED</Text>
                     </TouchableOpacity>
                    </View>
            </View>
            <View style={styles.userinter}>
                <Image style={styles.lessonimage} source={require('./../assets/New folder/content img.jpg')} />
                    <View style={styles.textcontainer}>
                     <Text style={styles.stext}>Structured Mentorship</Text>
                    <Text style={styles.ptext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    <Text style={styles.ptext}>Mattis amet nisl, euismod bibendum arcu platea eros.</Text>
                    <Text style={styles.ptext}>ornare. Fermentum aliquam sit convallis ipsum.</Text>
                     <TouchableOpacity onPress={()=> navigation.navigate("ContentPage")}  style= {styles.button}>
                    <Text style={styles.buttonText}>GET STARTED</Text>
                     </TouchableOpacity>
                    </View>
            </View>
            <View style={styles.userinter}>
                <Image style={styles.lessonimage} source={require('./../assets/New folder/lesson img.jpg')} />
                    <View style={styles.textcontainer}>
                     <Text style={styles.stext}>Soft Skills</Text>
                    <Text style={styles.ptext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    <Text style={styles.ptext}>Mattis amet nisl, euismod bibendum arcu platea eros.</Text>
                    <Text style={styles.ptext}>ornare. Fermentum aliquam sit convallis ipsum.</Text>
                     <TouchableOpacity onPress={()=> navigation.navigate("ContentPage")}  style= {styles.button}>
                    <Text style={styles.buttonText}>GET STARTED</Text>
                     </TouchableOpacity>
                    </View>
            </View>
            <View style={styles.textcontainer}>
                    <Text style={styles.ptext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    <Text style={styles.ptext}>Mattis amet nisl, euismod bibendum arcu platea eros.</Text>
                    <Text style={styles.ptext}>ornare.Fermentum aliquam sit convallis ipsum.</Text>
                    </View> 
                   
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#ffffff",
        justifyContent:"center",
        width:"100%",
        height:"95%",
        paddingStart:15
    },
    icon:{
        flexDirection:"row-reverse",
        alignSelf:"center",
        marginBottom:"10",
        justifyContent:"space-evenly",
        width:500
    },
    userinter:{
        flexDirection:"row",
        width:80,
    },
    ftext:{
        fontSize: 24,
        lineHeight:30,
        fontStyle:"normal",
        width:"355",
        fontFamily: 'Mulish',
        textAlign:"center"
    },
     ftext2:{
        fontSize: 20,
        lineHeight:20,
        fontStyle:"normal",
        width:"355",
        fontFamily: 'Mulish',
        height:"30",
        textAlign:"left"
    },
    stext:{
        fontSize: 18,
        fontWeight:"bold",
        lineHeight:45,
        fontFamily: 'Mulish',
        color:"#F0A64A"
    },
    ptext:{
        fontSize: 10,
        justifyContent:"space-evenly",
        textAlign:"justify",
        fontFamily: 'Mulish',
        marginTop:"20"
    },
    buttonText:{
        color:"#F0A64A",
        fontStyle:'normal',
        fontWeight:"500",
        fontSize:"15",
        textAlign:"center",
        fontFamily: 'Mulish',
        padding:8,
        backgroundColor:"#477A71",
        width:"70%",
        borderRadius:10,
        alignSelf:"center"
    },
    textcontainer:{
        padding: 10
    },
      buttoncontainer: {
        alignContent:"center",
        alignSelf:"center",
        paddingVertical:50,
        marginBottom:50,
      },
      Logoimage:{
        width: 50 ,
        height: 50,
        alignSelf:"flex-end",
        paddingEnd:10
      },
      WelcomeImage:{
        width: 330,
        height: 141,
        alignItems:"center",
        marginTop:10,
        marginBottom:10,
        borderRadius:23,
        padding:20
      },
      lessonimage:{
        width: 100,
        height: 100,
        alignItems:"center",
        marginTop:10,
        marginBottom:10,
        borderRadius:23,
      },
})
export default MyDashboard;