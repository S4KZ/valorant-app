import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView } from 'react-native';
import { useLoadFonts } from '../../componentes/fonts';

const Wall = require('../../assets/img/Jettwalpaper.png');
const Personagens = require('../../assets/img/jettGif.gif');

export default function Home() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) {
    return <View><Text>Carregando fontes...</Text></View>;
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView>
        <Image source={Wall} style={styles.wall} />

        <View style={styles.center}>
          <View style={styles.card}>
            <Text style={styles.textVa}>vAlorant</Text>
            <View style={styles.boxText}>
              <Text style={styles.textBo}>
                NÓS SOMOS VALORANT
              </Text>
              <Text style={styles.textH}>DESAFIE SEUS LIMITES</Text>
              <Text style={styles.textP}>Misture o seu estilo e experiência em um cenário global e competitivo. Você terá 13 rodadas para atacar e defender com disparos certeiros e habilidades táticas. Com apenas uma vida por rodada, você deve pensar mais rápido que o oponente se quiser sobreviver. Encare inimigos nos modos Competitivo e Sem Ranque, além da Disputa da Spike e do Mata-Mata!</Text>
            </View>
            <Image source={Personagens} style={styles.gifCard} />
            
          </View>
         
        </View>
        

      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#53212b',

  },

  wall: {
    maxHeight: 660,
    maxWidth: '100%',
    resizeMode: 'stretch'
  },
  card: {
    height: 919,
    backgroundColor: '#fffbf5',
    bottom: 100
  },
  gifCard: {
    maxHeight: 465,
    maxWidth: '100%',
    top: 15,
    resizeMode: 'stretch'
  },
  textVa: {
    fontFamily: 'Valorant-Font',
    fontSize: 65,
    color: '#fffbf5',
    bottom: 80,
    textAlign: 'center'
  },
  textBo: {
    fontSize: 90,
    fontFamily: 'Tungsten-Bold',
    textAlign: 'left',
    paddingLeft: 15,
  },
  textH: {
    fontSize: 22,
    fontFamily: 'Dinnextw1-italic',
    paddingHorizontal: 20,
  },
  textP: {
    top: 10,
    fontSize: 16,
    fontFamily: 'Dinnextw1',
    paddingLeft: 16,
  },
  boxText: {
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    width: 350,
  }

});
