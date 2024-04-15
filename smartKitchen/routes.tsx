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
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="home" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="home-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="mecanico"
                component={Mecanico}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="lock-closed" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="lock-closed-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="musica"
                component={Musica}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="lock-closed" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="lock-closed-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="recomendacaoEstudos"
                component={RecomendacaoEstudos}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="lock-closed" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="lock-closed-outline" />)
                    }
                }}
            />
            <Tab.Screen
                name="tradutor"
                component={Traducao}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={25} color={"#000"} name="lock-closed" />)
                        }
                        return (<Ionicons size={20} color={"#000"} name="lock-closed-outline" />)
                    }
                }}
            />
        </Tab.Navigator>
    )
}