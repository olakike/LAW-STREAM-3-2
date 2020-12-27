import React from 'react';import { View, Image, StyleSheet, Text, Button,SafeAreaView, } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


function ContentPage(props) {
  return (
    <SafeAreaView style={styles.container}>
        <View>
           <Text style={styles.ftext2}>Introduction to React and React Native</Text> 
        </View>
        <View>
           <Image style={styles.WelcomeImage} source={require("../assets/New folder/video imag.jpg")}/> 
        </View>
        <View style={styles.textcontainer}>
                 <Text style={styles.stext}>Description</Text>
                <Text style={styles.ptext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text style={styles.ptext}>Mattis amet nisl, euismod bibendum arcu platea eros.</Text>
                <Text style={styles.ptext}>ornare. Fermentum aliquam sit convallis ipsum.</Text>
                <Text style={styles.ptext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text style={styles.ptext}>Imperdiet quis molestie praesent at. A vitae fusce etiam turpis  </Text>
                <Text style={styles.ptext}>pharetra nullam risus.Commodo, justo suscipit pellentesque risus. </Text>
                <Text style={styles.ptext}> Neque vitae enim diam nisi, neque justo, lacus, tellus malesuada.</Text>
        </View>
        <Text style={styles.stext}>Additional Materials</Text>
        <View style={styles.userinter}>
                <Image style={styles.pdf} source={require("../assets/New folder/pdf.png")}/>
                 <Text style={styles.pdtext}>Introduction to React</Text>
        </View>
        <View style={styles.userinter}>
                <Image style={styles.pdf} source={require("../assets/New folder/pdf.png")}/>
                 <Text style={styles.pdtext}>Introduction to Reactjs</Text>
        </View>
        <View style={styles.userinter}>
                <Image style={styles.pdf} source={require("../assets/New folder/pdf.png")}/>
                 <Text style={styles.pdtext}>Fundamental of Reactnative</Text>
        </View>
        <View style={styles.userinter}>
                <Image style={styles.pdf} source={require("../assets/New folder/pdf.png")}/>
                 <Text style={styles.pdtext}>Introduction to Reactnative CheatSheet</Text>
                 </View>
                <View>  
                 <TouchableOpacity onPress={()=> navigation.navigate("ContentPage")}  style= {styles.button}>
                <Text style={styles.buttonText}>DOWNLOAD VIDEO HERE</Text>
                 </TouchableOpacity>
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
    flexDirection:"row",
    alignSelf:"center",
    marginBottom:"10",
    justifyContent:"space-evenly",
    width:800
},
userinter:{
    flexDirection:"row",
    width:350,
    height:40,
    justifyContent:"flex-start",
    backgroundColor:'pink',
    marginBottom:20,

},
ftext:{
    fontSize: 24,
    lineHeight:30,
    fontStyle:"normal",
    width:"355",
    height:"30",
    textAlign:"center"
},
pdtext:{
  fontSize: 16,
  lineHeight:40,
  fontStyle:"normal",
  height:"30",
  textAlign:"center"
},
 ftext2:{
    fontSize: 20,
    lineHeight:20,
    fontStyle:"normal",
    width:"355",
    height:"30",
    textAlign:"center"
},
stext:{
    fontSize: 18,
    fontWeight:"bold",
    lineHeight:45,
    color:"#F0A64A",
    textAlign:"center"
},
ptext:{
    fontSize: 10,
    justifyContent:"space-evenly",
    textAlign:"justify",
    marginTop:"20"
},
buttonText:{
    color:"#F0A64A",
    fontStyle:'normal',
    fontWeight:"600",
    fontSize:"30",
    textAlign:"center",
    padding:8,
    backgroundColor:"#477A71",
    width:"50%",
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
    width: 70 ,
    height: 70,
    alignSelf:"flex-end",
    paddingEnd:20
  },
  pdf:{
    width:30 ,
    height:40,
    alignSelf:"flex-start",
    marginLeft:10,
    marginRight:20,
    alignItems:"center"
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
export default ContentPage;