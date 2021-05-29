import React, {useCallback, useState} from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
  useTheme,
} from 'react-native-paper'
import {ToggleThemeProvider} from './src/contexts'
import MainNavigator from './src/screens/MainNavigator'

export default function App() {
  const scheme = useColorScheme()
  const [theme, setTheme] = useState(
    scheme == 'dark' ? DarkTheme : DefaultTheme,
  )
  const toggleTheme = useCallback(
    () => setTheme(theme => (theme.dark ? DefaultTheme : DarkTheme)),
    [],
  )
  return (
    <AppearanceProvider>
      <PaperProvider theme={theme}>
        <ToggleThemeProvider toogleTheme={toggleTheme}>
          <SafeAreaView style={[styles.safeAreaView]}>
            <MainNavigator />
          </SafeAreaView>
        </ToggleThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  )
}
const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
})
