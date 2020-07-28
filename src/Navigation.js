import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, Entypo, Feather } from '@expo/vector-icons';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Pay from './pages/Pay';
import Notifications from './pages/Notifications';

import PayButton from "./components/PayButton";

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: Feather,
        name: 'home'
    },
    Wallet: {
        lib: Entypo,
        name: 'wallet'
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline'
    },
    Settings: {
        lib: AntDesign,
        name: 'setting'
    }
};

const Navigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({route, navigation}) => ({
                tabBarIcon: ({color, size, focused}) => {
                    if (route.name === 'Pay'){
                        return <PayButton
                            onPress={() => navigation.navigate('Pay')}
                            focused={focused}
                        />
                    } else {
                        const {lib: Icon, name} = icons[route.name];
                        return <Icon name={name} size={size} color={color}/>;
                    }
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)'
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c'
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Início'
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={Wallet}
                options={{
                    title: 'Carteira'
                }}
            />
            <Tab.Screen
                name="Pay"
                component={Pay}
                options={{
                    title: ''
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    title: 'Notificações'
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Pay}
                options={{
                    title: 'Ajustes'
                }}
            />
        </Tab.Navigator>
    );
};

export default Navigation;