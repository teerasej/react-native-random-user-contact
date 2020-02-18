import React from 'react';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HomePage from "./pages/home-page/HomePage";
import DetailPage from './pages/detail-page/DetailPage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// config ส่วน redux
import { Provider } from 'react-redux';
import configureStore from "./redux/store";
const store = configureStore();

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
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
}