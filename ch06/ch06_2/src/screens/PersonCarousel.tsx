// 초기 모습
import React, {useCallback, useState, useRef, useEffect, useMemo} from 'react'
import type {FC} from 'react'
import {View, Text, Image, Alert, Animated, Easing} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment-with-locales-es6'
import * as D from '../data'
import {useToggle} from '../hooks' // 추가했습니다.
import {Avatar} from '../components'
import {styles} from './Person.style'

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void // 추가했습니다.
}
const PersonCarousel: FC<PersonProps> = ({person, deletePressed}) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), [])

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          size={50}
          onPress={avatarPressed}
        />
        <Text style={[styles.text]}>Press Me</Text>
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={Colors.lightBlue500}
            onPress={deletePressed}
          />
        </View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.countsView]}>
          <Icon name="comment" size={24} color={Colors.blue500} />
          <Icon name="twitter-retweet" size={24} color={Colors.purple500} />
          <Icon name="heart" size={24} color={Colors.red500} />
        </View>
      </View>
    </View>
  )
}
export default PersonCarousel
// 최종 모습
/*
import React, {useMemo} from 'react'
import type {FC} from 'react'
import {View, Text} from 'react-native'
import * as D from '../data'
import {useToggle, useLayout} from '../hooks'
import {Avatar, ImageSlider} from '../components'
import {styles} from './Person.style'

export type PersonProps = {
  person: D.IPerson
  deletePressed: () => void
}
const PersonCarousel: FC<PersonProps> = ({person, deletePressed}) => {
  const imageUrls = useMemo(
    () => D.makeArray(D.random(2, 6 + 1)).map(D.randomImage),
    []
  )
  const [layout, setLayout] = useLayout()
  const [showThumbnails, toggleShowThumbnails] = useToggle(true)

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} />
      </View>
      <View style={[styles.rightView]} onLayout={setLayout}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10
            }
          ]}>
          <Text style={[styles.text]}>
            imageUrls.length: {imageUrls.length}
          </Text>
          <Text style={[styles.email]} onPress={toggleShowThumbnails}>
            show thumbnails
          </Text>
        </View>
        <ImageSlider
          imageUrls={imageUrls}
          imageWidth={layout.width}
          showThumbnails={showThumbnails}
        />
      </View>
    </View>
  )
}
export default PersonCarousel
*/
