import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView } from 'react-native';
import { useLoadFonts } from '../../componentes/fonts';

const Wall = require('../../assets/img/VALORANT_Jett.jpg');
const UserI = require('../../assets/img/user.png');
const Omenicon = require('../../assets/img/omenicon.png');
const Jetticon = require('../../assets/img/jetticon.png');
const Isoicon = require('../../assets/img/iso.png');
const HSicon = require('../../assets/img/hs.png');
const Ouroicon = require('../../assets/img/ouro.png');
const Plat = require('../../assets/img/plat.png');
const Control = require('../../assets/img/control.png');
const Carrer = require('../../assets/img/carrer.png');

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
                    style={{ fontFamily: 'Dinnextw1' }}
                  > Charmoso</Text>
                </Text>
              </View>
            </View>
            <View>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={{ ...styles.title, textAlign: 'center' }}>ESTATÍSTICAS DE AGENTE</Text>
            <View style={styles.containerFlex}>
              <View style={styles.carta}>
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>MAIS JOGADO</Text>
                <Image source={Omenicon} style={styles.icon} />
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>23 PARTIDAS</Text>
                <Text style={{ ...styles.subtitleB, textAlign: 'center' }}>Entre os melhores 39%</Text>
              </View>

              <View style={styles.carta}>
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>AMA MAIS ALTO</Text>
                <Image source={Isoicon} style={styles.icon} />
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>K/D 2.32</Text>
                <Text style={{ ...styles.subtitleB, textAlign: 'center' }}>Entre os melhores 7%</Text>
              </View>

              <View style={styles.carta}>
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>MAIS VITÓRIAS</Text>
                <Image source={Jetticon} style={styles.icon} />
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>50% TAXA DE VITORIA</Text>
                <Text style={{ ...styles.subtitleB, textAlign: 'center' }}>Venceu 5 partidas de 10</Text>
              </View>


              <Text style={{ ...styles.title, textAlign: 'center' }}>ESTATÍSTICAS GERAIS</Text>
              <View style={styles.carta}>
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>TAXA DE HS</Text>
                <Image source={HSicon} style={styles.icon} />
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>18% DE HS</Text>
                <Text style={{ ...styles.subtitleB, textAlign: 'center' }}>
                  5º Melhor entre seus amigos</Text>
              </View>

              <View style={styles.carta}>
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>ELO ATUAL</Text>
                <Image source={Ouroicon} style={styles.icon} />
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>OURO</Text>
                <Text style={{ ...styles.subtitleB, textAlign: 'center' }}>
                  Porteiro do Prata</Text>
              </View>

              <View style={styles.carta}>
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>MELHOR ELO</Text>
                <Image source={Plat} style={styles.icon} />
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>PLATINA 2</Text>
                <Text style={{ ...styles.subtitleB, textAlign: 'center' }}>
                episódio 7 ATO 3
                #saudadesdopratina
                </Text>
              </View>

              <View style={styles.carta}>
                <Text style={{ ...styles.titleB, textAlign: 'center' }}>MELHOR FUNÇÃO</Text>
                <Image source={Control} style={styles.icon} />
                <Text style={{ ...styles.titleB, textAlign: 'center', fontSize: 33 }}>CONTROLADOR</Text>
                <Text style={{ ...styles.subtitleB, textAlign: 'center' }}>
                Função mais jogada e com maior taxa d vitória
                </Text>
              </View>
              <Text style={{ ...styles.title, textAlign: 'center' }}>CARREIRA</Text>
              <Image source={Carrer}/>


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
  box: {
    height: '100%',
    bottom: 120,
  },
  carta: {
    maxWidth: "44%",
    padding: 40,
    width: "50%",
    backgroundColor: '#fffbf5',
    padding: 10,
    margin: 10,
  },
  containerFlex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
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
  titleB: {
    fontSize: 36,
    fontFamily: 'Tungsten-Bold',
    color: '#000000',
  },
  subtitleB: {
    fontSize: 16,
    fontFamily: 'Dinnextw1-italic',
    color: '#000000',
    bottom: 5,
  },
  icon: {
    height: 200,
    maxHeight: 240,
    width: "100%",
    resizeMode: 'contain',
  },


});
