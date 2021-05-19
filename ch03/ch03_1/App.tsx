import Color from 'color'
import React from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'
import {Colors} from 'react-native-paper'

// console.log(Color(Colors.blue500).alpha(0.5).lighten(0.5).string())
// export default function App() {
//   return (
//     <SafeAreaView style={[styles.safeAreaView, {backgroundColor: 'blue'}]}>
//       <Text style={[styles.text, {color: Colors.blue500}]}>
//         Hello StyleSheet world!
//       </Text>
//     </SafeAreaView>
//   )
// }
// const styles = StyleSheet.create({
//   safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
//   text: {fontSize: 20},
// })
console.log(Colors.blue500)
console.log(Color(Colors.blue500).alpha(0.5).lighten(0.5).string())

export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello StyleSheet world!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue500,
  },
  text: {
    fontSize: 20,
    color: Color(Colors.blue500).alpha(0.7).lighten(0.9).string(),
  },
})
