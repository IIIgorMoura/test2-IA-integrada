import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from './pages/Index';
import { Mecanico } from './pages/mecanico';
import { Musica } from './pages/musica'
import { RecomendacaoEstudos } from './pages/recomendacaoEstudos'
import { Traducao } from './pages/traducao'

import { Ionicons } from '@expo/vector-icons/';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { 
                    backgroundColor: "#000",
                    borderTopWidth: 2,
                    borderTopColor: 'red',
                },
            }}
        >
            <Tab.Screen
                name="Página Inicial"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#fff"} name="home" />)
                        }
                        return (<Ionicons size={20} color={"#fff"} name="home-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Mecanica"
                component={Mecanico}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#fff"} name="car-sport" />)
                        }
                        return (<Ionicons size={20} color={"#fff"} name="car-sport-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Musica"
                component={Musica}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#fff"} name="musical-notes" />)
                        }
                        return (<Ionicons size={20} color={"#fff"} name="musical-notes-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Planejador de Estudos"
                component={RecomendacaoEstudos}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#fff"} name="book" />)
                        }
                        return (<Ionicons size={20} color={"#fff"} name="book-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="Tradutor de Textos"
                component={Traducao}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#fff"} name="earth" />)
                        }
                        return (<Ionicons size={20} color={"#fff"} name="earth-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}