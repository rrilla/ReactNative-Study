import React, {useCallback, useState} from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {AppearanceProvider, useColorScheme} from 'react-native-appearance'
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'
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
  console.log(scheme)
  return (
    <AppearanceProvider>
      <PaperProvider theme={DarkTheme}>
        <SafeAreaView style={[styles.safeAreaView]}>
          <MainNavigator />
        </SafeAreaView>
      </PaperProvider>
    </AppearanceProvider>
  )
}
const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
})
