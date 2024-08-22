import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar  } from 'react-native';


export default function Agentes() {
  return (
   
      <View style={styles.container}>
        <StatusBar/>
        <Text>Bem-vindo ao Agentes!</Text>
        
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#53212b'
  },

});
