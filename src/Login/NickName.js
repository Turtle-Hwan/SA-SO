import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function NickName () {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>프로필 사진과</Text>
        <Text style={styles.titleText}>닉네임을 설정해주세요!</Text>
      </View>

      <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('TabNav')}>
        <Text style={styles.signText}>다음</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    width : '100%',
    height : '100%',  
    backgroundColor : '#ffffff',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  titleContainer:{
    width:'100%',
    marginTop : 70,
  },
  titleText:{
    marginLeft : 20,
    fontFamily: 'NotoSansKR-Bold',
    fontSize : 20,
    color: '#555555',
    lineHeight : 32
  },
  textContainer:{
    width : '100%',
    marginTop : 12,
    backgroundColor : '#F3F3F3', 
    alignItems : 'center'
  },
  signText:{
    fontFamily: 'NotoSansKR-Bold',
    fontSize : 20,
    color: '#555555'
  }
})
