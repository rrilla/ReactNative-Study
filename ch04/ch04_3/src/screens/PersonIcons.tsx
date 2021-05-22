import React, {Dispatch, SetStateAction, useCallback, useState} from 'react'
import type {FC} from 'react'
import {View, Text, Image, Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment-with-locales-es6'
import * as D from '../data'
import {Avatar, IconText} from '../components'
import {styles} from './Person.style'

moment.locale('ko')

export type PersonIconsProps = {
  person: D.IPerson
  setPerson: Dispatch<SetStateAction<D.IPerson>>
}

const PersonIcons: FC<PersonIconsProps> = ({person, setPerson}) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), [])
  const deletePressed = useCallback(() => Alert.alert('delete pressed.'), [])

  const commentIconPressed = useCallback(() => {
    setPerson(person => ({
      ...person,
      counts: {
        ...person.counts,
        comment: person.counts.comment + 1,
      },
    }))
  }, [])
  const retweetIconPressed = useCallback(
    () =>
      setPerson(person => {
        const {retweet} = person.counts
        return {...person, counts: {...person.counts, retweet: retweet + 1}}
      }),
    [],
  )
  const heartIconPressed = useCallback(() => {
    setPerson(person => ({
      ...person,
      counts: {
        ...person.counts,
        heart: person.counts.heart + 1,
      },
    }))
  }, [])
  return (
    <View style={[styles.countsView]}>
      <IconText
        viewStyle={[styles.touchableIcon]}
        onPress={commentIconPressed}
        name="comment"
        size={24}
        color={Colors.blue500}
        textStyle={[styles.iconText]}
        text={person.counts.comment}
      />
      <IconText
        viewStyle={[styles.touchableIcon]}
        onPress={retweetIconPressed}
        name="twitter-retweet"
        size={24}
        color={Colors.purple500}
        textStyle={[styles.iconText]}
        text={person.counts.retweet}
      />
      <IconText
        viewStyle={styles.touchableIcon}
        onPress={heartIconPressed}
        name="heart"
        size={24}
        color={Colors.red500}
        textStyle={[styles.iconText]}
        text={person.counts.heart}
      />
    </View>
  )
}
export default PersonIcons
