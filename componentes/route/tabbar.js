import * as React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import Home from '../../pages/home';
import Agentes from '../../pages/agentes';
import User from '../../pages/user'

const facab = require('../../assets/img/facab.png')
const dashR = require('../../assets/img/dashR.png')



const Tab = createBottomTabNavigator();

export default function TabBar() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                padding: 5,
                bottom: 40,
                left: 50,
                right: 50,
                borderRadius: 35,
                height: 80,
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 10 },
                shadowOpacity: 0.90,
                shadowRadius: 9,
            }
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        if (focused) { // se ele estiver focado
                            return (
                                <View style={styles.box}>
                                    <Icon name="home" size={30} color="#bd3944" />
                                    <Text>Home</Text>
                                </View>
                            );
                        }
                        // se n tiver interação
                        return (
                            <View style={styles.box}>
                                <Icon name="home" size={30} color="black" />
                            </View>
                        )

                    }
                }} />


            <Tab.Screen name='Agentes' component={Agentes}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <View style={styles.box}>
                                    <Image source={dashR} style={styles.icon} />
                                    <Text>Agentes</Text>
                                </View>
                            );
                        }
                        return (
                            <View style={styles.box}>
                                <Image source={facab} style={styles.iconi} />
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name='User'
                component={User}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <View style={styles.box}>
                                    <Icon name="user" size={21} color="#bd3944" />
                                    <Text>User</Text>
                                </View>
                            );
                        }
                        return (
                            <View style={styles.box}>
                                <Icon name="user" size={21} color="black" />
                            </View>
                        );
                    }
                }} />




        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        height: 30,
        width: 30,
    },
    iconi: {
        height: 30,
        width: 30,
        bottom: 3,
    }

});