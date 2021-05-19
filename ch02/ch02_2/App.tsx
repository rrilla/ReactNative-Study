import React from 'react'
import {SafeAreaView, Text} from 'react-native'

export default function App() {
  const arr = [1, 2, 3].map(i => <Text>Hello JSX world!!!!!{i}</Text>)
  const arr2 = new Array(100)
    .fill(null)
    .map((notUsed, i) => <Text>Hello JSX world!!!!!{i}</Text>)
  return <SafeAreaView>{arr2}</SafeAreaView>
}
