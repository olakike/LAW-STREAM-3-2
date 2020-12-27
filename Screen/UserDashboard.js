import React from 'react';
import { View, Image, StyleSheet, Text, Button,SafeAreaView, } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

function UserDashboard(props) {
    return (
  
    <View style={{paddingBottom: 100 }}>
    <View>
    <Image style={styles.contain} source={require('./../assets/favicon.png')}/> 
    </View>
    <View>
    <View>
        <Image style={styles.container} source={require('./../assets/favicon.png')} />
          <View style={styles.text}>
              <Text style={styles.title}>Mobile App Development</Text>
              <Text style={styles.caption.write}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mattis amet nisl, euismod bibendum arcu platea eros, ornare. Fermentum aliquam sit convallis ipsum. </Text>
              <TouchableOpacity onPress={()=> navigation.navigate("ContentPage")}  style= {styles.button}>
                    <Text style={styles.buttonText}>get started</Text>
                </TouchableOpacity>
          </View>
      </View>

      <View style={styles.allText}>
        <Image style={styles.container} source={require('./../assets/adaptive-icon.png')} />
          <View style={styles.text}>
              <Text style={styles.title}>Mobile App Development</Text>
              <Text style={styles.caption.write}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mattis amet nisl, euismod bibendum arcu platea eros, ornare.Fermentum aliquam sit convallis ipsum. </Text>
              <TouchableOpacity onPress={()=> navigation.navigate("ContentPage")}  style= {styles.button}>
                    <Text style={styles.buttonText}>get started</Text>
                </TouchableOpacity>
          </View>
      </View>

      <View style={styles.allText} >
        <Image style={styles.container} source={require('./../assets/adaptive-icon.png')} />
          <View style={styles.text}>
              <Text style={styles.title}>Mobile App Development</Text>
              <Text style={styles.caption.write}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mattis amet nisl, euismod bibendum arcu platea eros, ornare. Fermentum aliquam sit convallis ipsum. </Text>
              <TouchableOpacity onPress={()=> navigation.navigate("ContentPage")}  style= {styles.button}>
                    <Text style={styles.buttonText}>get started</Text>
                </TouchableOpacity>
          </View>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'right',
    justifyContent: 'right',
    width: 120, 
    height:120, 
    borderRadius: 10,
    padding: 10, 
  },
  text: {
    textAlign: 'left', 
    flex: 40,
    paddingLeft: 120,
    flexWrap: "wrap",
  },

  title:{
    // alignItems: 'left',
    color: 'black',
    fontSize: 18,
  
    fontStyle: 'bold',
    // borderWidth: 2,
    // padding: 10,
    // borderColor: 'black',
  },
    button: {
      backgroundColor: '#477A71',
      //  paddingVertical: 8,
       paddingHorizontal:10,
       marginVertical: 8,
       width: "50%",
       height: "15%",
      //  boxShadow: 0 1 4 '#ADC7C2',
       borderRadius: 5,
       alignItems: 'right',
  },

  buttonText: {
    textAlign: 'center',
    color: '#F0A64A',
    paddingBottom: 40,
  },

  caption: {
    color: 'blue',
  },
  full: {
    position: 'absolute',
    // background: 'F0A64A',
    borderRadius: 23,
  },
  write:{
    // position: 'left',
    fontFamily: 'Mulish',
    fontSize: 12,
    
  },
    all:{
    //  padding: 10,
     fontFamily: 'mulish',
     paddingBottom: 100,
    },
    allText: {
      flexDirection: 'row',
       padding: 10,
      paddingBottom: 40,
      textAlign: 'left',
      flexWrap: "wrap",
    paddingTop: 5,
     
    },
});

export default UserDashboard;