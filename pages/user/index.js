import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView } from 'react-native';
import { useLoadFonts } from '../../componentes/fonts';

const Wall = require('../../assets/img/VALORANT_Jett.jpg');
const UserI = require('../../assets/img/user.png');

export default function User() {

  const fontsLoaded = useLoadFonts();

  return (

    <View style={styles.container}>
      <StatusBar />
      <ScrollView>
        <Image source={Wall} style={styles.wall} />
        <View style={styles.center}>
          <View style={styles.card}>
            <View style={styles.linha}>
              <Image source={UserI} style={styles.userI} />

              <View style={styles.coluna}>
              <Text style={styles.title}>SKZ#HZ1</Text>
              <Text style={styles.subtitle}>
                Titulo:  
                <Text
                style={{fontFamily: 'Dinnextw1'}}
                > Charmoso</Text>
              </Text>
              </View>
            </View>
            
          </View>
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53212b',
    alignItems: 'center',
  },
  center: {
    display: 'flex',
    alignItems: 'center'
  },
  wall: {
    maxHeight: 360,
    maxWidth: '100%',
    resizeMode: 'cover',
    bottom: 6,
  },
  linha: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  coluna: {
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    width: '100%',
    padding: 25,
    borderRadius: 50,
    // backgroundColor: '#fffbf5',
    backgroundColor: '#53212b',
    bottom: 120,
  },
  userI: {
    borderRadius: 90,
    marginRight: 20,
    
  },
  title: {
    fontSize: 40,
    fontFamily: 'Tungsten-Bold',
    color: '#fffbf5',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Dinnextw1-italic',
    color: '#fffbf5',
  },

});
