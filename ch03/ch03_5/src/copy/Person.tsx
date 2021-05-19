// 컴파일 오류만 나지 않게 구현한 초기 모습
import React, {FC} from 'react'
import {Text} from 'react-native'
import * as D from '../data'
import {styles} from './Person.style'

export type PersonProps = {
  person: D.IPerson
}
const Person: FC<PersonProps> = ({person}) => {
  return <Text>{JSON.stringify(person, null, 2)}</Text>
}
export default Person
// Person 컴포넌트 초기 스타일
/*
import React from 'react'
import type {FC} from 'react'
import {View, Text, Image} from 'react-native'
import {styles} from './Person.style'
import * as D from '../data'
import moment from 'moment-with-locales-es6'

moment.locale('ko')

export type PersonProps = {
  person: D.IPerson
}
const Person: FC<PersonProps> = ({person}) => {
  return (
    <View style={[styles.view]}>
      <Image source={{uri: person.avatar}} style={[styles.avatar]} />
      <View style={[styles.nameEmailView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
      </View>
      <View style={[styles.dateView]}>
        <Text style={[styles.createdDate]}>
          {moment(person.createdDate).startOf('day').fromNow()}
        </Text>
      </View>
      <Text style={[styles.text]}>{person.comments}</Text>
      <Image style={[styles.image]} source={{uri: person.image}} />
      <View style={[styles.countsView]}>
        <Text style={[styles.counts]}>{person.counts.comment}</Text>
        <Text style={[styles.counts]}>{person.counts.retweet}</Text>
        <Text style={[styles.counts]}>{person.counts.heart}</Text>
      </View>
    </View>
  )
}
export default Person
*/
// 최종 모습
// import React from 'react'
// import type {FC} from 'react'
// import {View, Text, Image, Alert} from 'react-native'
// import {Colors} from 'react-native-paper'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import moment from 'moment-with-locales-es6'
// import * as D from '../data'
// import {Avatar, IconText} from '../components'
// import {styles} from './Person.style'

// moment.locale('ko')

// export type PersonProps = {
//   person: D.IPerson
// }
// const avatarPressed = () => Alert.alert('avatar pressed.')
// const deletePressed = () => Alert.alert('delete pressed.')
// const countIconPressed = (name: string) => () => Alert.alert(`${name} pressed.`)

// const Person: FC<PersonProps> = ({person}) => {
//   return (
//     <View style={[styles.view]}>
//       <View style={[styles.leftView]}>
//         <Avatar
//           imageStyle={[styles.avatar]}
//           uri={person.avatar}
//           size={50}
//           onPress={avatarPressed}
//         />
//       </View>
//       <View style={[styles.rightView]}>
//         <Text style={[styles.name]}>{person.name}</Text>
//         <Text style={[styles.email]}>{person.email}</Text>
//         <View style={[styles.dateView]}>
//           <Text style={[styles.text]}>
//             {moment(person.createdDate).startOf('day').fromNow()}
//           </Text>
//           <Icon
//             name="trash-can-outline"
//             size={26}
//             color={Colors.lightBlue500}
//             onPress={deletePressed}
//           />
//         </View>
//         <Text
//           numberOfLines={3}
//           ellipsizeMode="tail"
//           style={[styles.text, styles.comments]}>
//           {person.comments}
//         </Text>
//         <Image style={[styles.image]} source={{uri: person.image}} />
//         <View style={[styles.countsView]}>
//           <IconText
//             viewStyle={[styles.touchableIcon]}
//             onPress={countIconPressed('comment')}
//             name="comment"
//             size={24}
//             color={Colors.blue500}
//             textStyle={[styles.iconText]}
//             text={person.counts.comment}
//           />
//           <IconText
//             viewStyle={[styles.touchableIcon]}
//             onPress={countIconPressed('retweet')}
//             name="twitter-retweet"
//             size={24}
//             color={Colors.purple500}
//             textStyle={[styles.iconText]}
//             text={person.counts.retweet}
//           />
//           <IconText
//             viewStyle={styles.touchableIcon}
//             onPress={countIconPressed('heart')}
//             name="heart"
//             size={24}
//             color={Colors.red500}
//             textStyle={[styles.iconText]}
//             text={person.counts.heart}
//           />
//         </View>
//       </View>
//     </View>
//   )
// }
// export default Person
