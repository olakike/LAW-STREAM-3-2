import React from 'react';
import { View, Image, StyleSheet, Text, Button,SafeAreaView, } from 'react-native';

function Home(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Profile')}
          title="Go to Profile"
        />
      </View>
    );
}

export default Home;