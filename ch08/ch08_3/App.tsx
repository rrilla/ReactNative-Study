import React, {useCallback, useState} from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context'; //아이폰 화면문제
// prettier-ignore
import {DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {Provider as ReduxProvider} from 'react-redux';

import {ToggleThemeProvider} from './src/contexts';
import MainNavigator from './src/screens/MainNavigator';
import {makeStore} from './src/store';

enableScreens(); //react-native-screens 모듈 동작에 필요한 코드

const store = makeStore();

export default function App() {
  const scheme = useColorScheme(); //'dark' or 'light'
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme,
  );
  const toggleTheme = useCallback(
    () => setTheme(({dark}) => (dark ? DefaultTheme : DarkTheme)),
    [],
  );

  return (
    <AppearanceProvider>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaProvider>
          <ReduxProvider store={store}>
            <NavigationContainer theme={theme}>
              <MainNavigator />
            </NavigationContainer>
          </ReduxProvider>
        </SafeAreaProvider>
      </ToggleThemeProvider>
    </AppearanceProvider>
  );
}
