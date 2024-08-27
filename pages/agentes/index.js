import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, } from 'react-native';
const Ep8 = require('../../assets/img/ep8.jpg');
const Chines = require('../../assets/img/chines.jpg');
const Icon = require('../../assets/img/omenicon.png');
const Jetticon = require('../../assets/img/jetticon.png');
const Isoicon = require('../../assets/img/iso.png');
export default function Agentes() {
  return (

    <View style={styles.container}>
      <StatusBar />
      <ScrollView >
        <Image source={Ep8} style={styles.Wall} />
        <View style={styles.box} >
          <Text style={{ ...styles.title, textAlign: 'justify' }}>SEUS AGENTES</Text>
          <Text style={styles.subTittle}>
            A CRIATIVIDADE É SUA MELHOR ARMA.
          </Text>
          <Text style={styles.text}>
            Mais do que armas e munição, VALORANT inclui agentes com habilidades adaptativas, rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro. Cada Agente é único, assim como os momentos de destaque de cada partida!
          </Text>
        </View>
        <Image source={Chines} style={{ ...styles.Wall, height: 210 }} />

        <View style={styles.containerCard}>

          <View style={styles.card}>
            <View style={styles.textCard}>
            <Image source={Icon} style={styles.icon} />
            <Text style={styles.title}>OMEN</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.textCard}>
            <Image source={Jetticon} style={styles.icon} />
            <Text style={styles.title}>JETT</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.textCard}>
            <Image source={Isoicon} style={styles.icon} />
            <Text style={styles.title}>ISO</Text>
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
  },
  Wall: {
    width: "100%",
    height: 200,
  },
  box: {
    backgroundColor: '#fffbf5',
    padding: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 95,
    fontFamily: 'Tungsten-Bold',
    color: '#000000',

  },
  subTittle: {
    fontSize: 18,
    fontFamily: 'Dinnextw1-italic',
    color: '#000000',
    textAlign: 'justify',
  },
  text: {
    fontFamily: 'Dinnextw1',
    fontSize: 15,
    color: '#000000',
    textAlign: 'justify',
  },
  card: {
    backgroundColor: '#fffbf5',
    width: '90%',
    height: 200,
    margin: 20,
    borderRadius: 10,
    padding: 12,
  },
  containerCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 110,
    top: 20
  },
  textCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  icon: {
    height: 170,
    width: '50%',
  },

});
