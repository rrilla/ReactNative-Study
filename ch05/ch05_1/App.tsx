import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {AppearanceProvider} from 'react-native-appearance'
import MainNavigator from './src/screens/MainNavigator'

export default function App() {
  return (
    <AppearanceProvider>
      <SafeAreaView style={[styles.safeAreaView]}>
        <MainNavigator />
      </SafeAreaView>
    </AppearanceProvider>
  )
}
const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
})
