import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SignUp () {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style ={styles.logoContainer}>
        <Image source={require('../../assets/image/splash_image.png')} style={styles.image}/>
      </View>
      <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('NickName')}>
          <Image source={require('../../assets/image/sign_kakao.png')} style={styles.signImage}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('NickName')}>
        <Image source={require('../../assets/image/sign_facebook.png')} style={styles.signImage}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('NickName')}>
        <Image source={require('../../assets/image/sign_naver.png')} style={styles.signImage}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={() => navigation.navigate('NickName')}>
        <Text style={styles.signText}>이메일로 로그인 / 회원가입</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    width : '100%',
    height : '100%',  
    backgroundColor : '#FFCBCB',
    alignItems : 'center'
  },
  logoContainer : {
    alignItems : 'center',
    justifyContent : 'center',
    width : 163,
    height : 154,
    marginTop : 200,
    marginBottom : 80,
  },
  image :{
    width : '100%',
    height : '100%',
  },
  signImage:{
    width : 320,
    height : 50,
    marginTop : 8,
  },
  textContainer:{
    marginTop : 12,
  },
  signText:{
    fontFamily: 'NotoSansKR-Bold',
  }
})
