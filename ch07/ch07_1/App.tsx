import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context'; //아이폰 화면문제
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import MainNavigator from './src/screens/MainNavigator';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

enableScreens(); //react-native-screens 모듈 동작에 필요한 코드

export default function App() {
  const isDarkTheme = useColorScheme();
  console.log(isDarkTheme);
  const theme = useState(isDarkTheme ? DarkTheme : DefaultTheme);
  console.log(theme);

  return (
    <AppearanceProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </AppearanceProvider>
  );
}
