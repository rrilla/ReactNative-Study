// 최종 모습
import React, {useMemo} from 'react'
import {StyleSheet, View, Text, FlatList} from 'react-native'
import {Colors} from 'react-native-paper'
import * as D from '../data'
import {fibonacci} from './fibonacci'

const title = 'Fibo'
export default function Fibo() {
  const memoizedFibonacci = useMemo(() => fibonacci, [])
  const fibos = useMemo(
    () =>
      D.makeArray(20 + 1).map((notUsed, index) => ({
        number: index,
        fibonacci: memoizedFibonacci(index),
      })),
    [],
  )
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList
        contentContainerStyle={[styles.contentContainerStyle]}
        data={fibos}
        renderItem={({item}) => (
          <Text style={[styles.text]}>
            {item.number} : {item.fibonacci}
          </Text>
        )}
        keyExtractor={item => item.number.toString()}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: Colors.blue900},
  text: {fontSize: 20, color: 'white'},
  contentContainerStyle: {height: '100%', alignItems: 'center'},
  // height: '100%'는 최근 RN이 0.64 버전이 되면서 이 책이 써졌을 때의 0.63.4 버전과 조금 다르게 동작하는 것을 반영한 것입니다.
})
