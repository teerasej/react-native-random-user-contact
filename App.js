import React from 'react';
import { View } from 'react-native';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HomePage from "./pages/home-page/HomePage";
import DetailPage from './pages/detail-page/DetailPage';

// config ส่วน navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// config ส่วน redux
import { Provider } from 'react-redux';
import configureStore from "./redux/store";
import AppLoading from 'expo-app-loading';
const store = configureStore();

const Stack = createStackNavigator();

export default function App() {

  const [isReady, setIsReady] = useState(false)

  // ทำงานหลังจาก App component ถูกสร้างขึ้นแสดงบนหน้าแอพแล้ว
  useEffectAsync(async () => {
    // สั่งให้ Load font เพื่อใช้งานใน UI Component ที่สร้างด้วย Native base
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })

    // ตั้งค่า State ใหม่ เพื่อให้ App component ทำการ render ตัวเองอีกครั้ง
    setIsReady(true)
  }, [])


  // แสดงตัว Loading ถ้า state ไม่พร้อม 
  // เพื่อป้องกันการ error เวลาที่ load font ให้กับ Native base UI ไม่เสร็จ
  if (!isReady) {
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