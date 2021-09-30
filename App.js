import React from 'react';
import AppLoading from 'expo-app-loading';
import { View } from 'react-native';
import { Container, Text } from 'native-base';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HomePage from "./pages/home-page/HomePage";
import DetailPage from './pages/detail-page/DetailPage';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

// config ส่วน redux
import { Provider } from 'react-redux';
import configureStore from "./redux/store";
const store = configureStore();


export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    ...Ionicons.font,
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage}
            options={{
              title: 'Contacts'
            }}
          />
          <Stack.Screen name="Detail" component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}