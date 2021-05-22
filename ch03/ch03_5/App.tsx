import React from 'react'
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import Person from './src/copy/Person'
import {Colors} from 'react-native-paper'
import color from 'color'
import * as D from './src/data'
import moment from 'moment'

const people = D.makeArray(30).map(D.createRandomPerson)
const person = D.createRandomPerson()
console.log(person.createdDate)
console.log(person.modifiedDate)
console.log('createDate', moment(person.createdDate).format('llll'))
console.log('modifiedDate', moment(person.modifiedDate).format('llll'))

export default function App() {
  return (
    <SafeAreaView style={styles.flex}>
      <FlatList
        data={people}
        renderItem={({item}: {item: D.IPerson}) => <Person person={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </SafeAreaView>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeparator: {
    borderWidth: 1,  borderColor: color(Colors.grey500).lighten(0.3).string(),
  },
})
