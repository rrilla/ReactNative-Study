import React, {useRef, useCallback, useState, useMemo} from 'react';
// prettier-ignore
import {StyleSheet, Switch, TextInput as RNTextInput, Keyboard} from 'react-native'
import {Text, TextInput, View} from '../theme/paper';
import {useTheme} from 'react-native-paper';
import {useToggleTheme, AutoFocusProvider, useAutoFocus} from '../contexts';
import * as D from '../data';
import ImperativeTextInput from './ImperativeTextInput';
import type {TextInputMethods} from './ImperativeTextInput';

export default function AutoFocus() {
  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson());
  const {dark} = useTheme();
  const toggleTheme = useToggleTheme();
  const autoFocus = useAutoFocus();

  const methodsRef = useRef<TextInputMethods | null>(null);
  const setFocus = useCallback(() => methodsRef.current?.focus(), []);
  const dismissKeyboard = useCallback(() => {
    methodsRef.current?.dismiss();
  }, []);

  return (
    <View style={[styles.view]}>
      <View style={[styles.topBar]}>
        <Text style={[styles.textButton]} onPress={setFocus}>
          focus
        </Text>
        <Text style={[styles.textButton]} onPress={dismissKeyboard}>
          dismiss keyboard
        </Text>
        <View style={{flex: 1}} />
        <Switch value={dark} onValueChange={toggleTheme} />
      </View>
      <AutoFocusProvider contentContainerStyle={[styles.flex]}>
        <View style={[styles.flex]} />
        <View style={[styles.textView]}>
          <Text style={[styles.text]}>email</Text>
          <ImperativeTextInput
            style={[styles.textInput]}
            onFocus={autoFocus}
            value={person.email}
            placeholder="enter your email"
            onChangeText={email => setPerson(person => ({...person, email}))}
          />
        </View>
        <View style={[styles.textView]}>
          <Text style={[styles.text]}>name</Text>
          <ImperativeTextInput
            ref={methodsRef}
            style={[styles.textInput]}
            onFocus={autoFocus}
            value={person.name}
            placeholder="enter your name"
            onChangeText={name => setPerson(person => ({...person, name}))}
          />
        </View>
      </AutoFocusProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  textButton: {marginLeft: 10, fontSize: 20},
  keyboardAvoidingView: {flex: 1, padding: 10},
  textView: {padding: 5},
  text: {fontSize: 24},
  textInput: {fontSize: 24, borderWidth: 1, borderRadius: 5},
  flex: {flex: 1},
});
