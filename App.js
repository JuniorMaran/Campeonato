import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/pages/Home'
import Campeonato from './src/pages/Campeonato'
import Fases from './src/pages/Fases'
import { createStackNavigator } from '@react-navigation/stack'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#004C8F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: true,
            title: "Campeonato",
            headerTitleAlign: "center",
            headerLeft: null,

          }}
        />
        <Stack.Screen
          name="Campeonato"
          component={Campeonato}
          options={{

            headerStyle: {
              backgroundColor: '#004C8F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: true,
            title: "Fases",
            headerTitleAlign: "center",
            headerLeft: null,

          }}
        />
        <Stack.Screen
          name="Fases"
          component={Fases}
          options={{

            headerStyle: {
              backgroundColor: '#004C8F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: true,
            title: "Fases",
            headerTitleAlign: "center",
            headerLeft: null,

          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
