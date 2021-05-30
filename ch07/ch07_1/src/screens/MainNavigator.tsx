// 테마 적용
import React from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {useToggleTheme} from '../contexts';

export default function MainNavigator() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <SafeAreaView style={[styles.flex]}>
      <View style={[styles.view, {backgroundColor: theme.colors.background}]}>
        <View style={[styles.topBar, {backgroundColor: theme.colors.primary}]}>
          <Switch value={theme.dark} onValueChange={toggleTheme} />
        </View>
        <View style={[styles.view]}>
          <Text style={[styles.text, {color: theme.colors.text}]}>
            This is top text.
          </Text>
          <Text style={[styles.text, {color: theme.colors.text}]}>
            This is bottom text.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  flex: {flex: 1},
  view: {flex: 1, alignItems: 'center', justifyContent: 'space-between'},
  topBar: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-end',
  },
  text: {fontSize: 20},
});
// 테마 적용 완성 버전
/*
import React, {useState} from 'react'
import {Platform, StyleSheet, Keyboard, Alert} from 'react-native'
// prettier-ignore
import {SafeAreaView, View, Text, UnderlineText, TextInput, TouchableView,
TopBar, MaterialCommunityIcon as Icon} from '../theme/navigation'
import * as D from '../data'
import {useAutoFocus, AutoFocusProvider} from '../contexts'

export default function MainNavigator() {
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
  const focus = useAutoFocus()
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <TopBar>
          <UnderlineText onPress={Keyboard.dismiss} style={[styles.text]}>
            dismiss keyboard
          </UnderlineText>
        </TopBar>
        <AutoFocusProvider contentContainerStyle={[styles.keyboardAwareFocus]}>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>email</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInput]}
                value={person.email}
                onChangeText={email =>
                  setPerson(person => ({...person, email}))
                }
                placeholder="enter your email"
              />
            </View>
          </View>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>name</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInput]}
                value={person.name}
                onChangeText={name => setPerson(person => ({...person, name}))}
                placeholder="enter your name"
              />
            </View>
          </View>
          <TouchableView
            notification
            style={[styles.touchableView]}
            onPress={() => Alert.alert('submit')}>
            <Text style={[styles.text, {marginRight: 5}]}>Login</Text>
            <Icon name="login" size={24} />
          </TouchableView>
        </AutoFocusProvider>
        <View style={[{marginBottom: Platform.select({ios: 50})}]} />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'space-between'},
  text: {fontSize: 20},
  keyboardAwareFocus: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textView: {width: '100%', padding: 5, marginBottom: 10},
  textInput: {fontSize: 24, padding: 10},
  textInputView: {marginTop: 5, borderRadius: 10},
  touchableView: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
*/
