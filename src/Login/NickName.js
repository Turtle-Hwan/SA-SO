import React , {useState}from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function NickName () {
  const navigation = useNavigation();

  const [text, onChangeText] = useState("");

  const [button1, setButton1] = useState("false");
  const [button2, setButton2] = useState("false");
  const [button3, setButton3] = useState("false");
  const [button4, setButton4] = useState("false");

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>프로필 사진과</Text>
        <Text style={styles.titleText}>닉네임을 설정해주세요!</Text>
      </View>

      <View style ={styles.iconList}>
          <View style={[styles.iconContainer, !(button1) && {borderColor : '#FFD3D3'}]}>
            <TouchableOpacity activeOpacity={0.6} style={styles.feelRound} onPress={() => {
              setButton1(!button1)
              setButton2(true)
              setButton3(true)
              setButton4(true)
            }}>
              <Image source={require('../../assets/image/icon/profile_icon_green.png')} style={styles.signIcon}/>
            </TouchableOpacity>
          </View>
          <View style={[styles.iconContainer, !(button2) && {borderColor : '#FFD3D3'}]}>
            <TouchableOpacity activeOpacity={0.6} style={[styles.feelRound]}
            onPress={() => {
              setButton1(true)
              setButton2(!button2)
              setButton3(true)
              setButton4(true)
            }}>
              <Image source={require('../../assets/image/icon/profile_icon_blue.png')} style={styles.signIcon}/>
            </TouchableOpacity>
          </View>
          <View style={[styles.iconContainer, !(button3) && {borderColor : '#FFD3D3'}]}>
            <TouchableOpacity activeOpacity={0.6} style={[styles.feelRound]}
            onPress={() => {
              setButton1(true)
              setButton2(true)
              setButton3(!button3)
              setButton4(true)
            }}>
              <Image source={require('../../assets/image/icon/profile_icon_yellow.png')} style={styles.signIcon}/>
            </TouchableOpacity>
          </View>
          <View style={[styles.iconContainer, !(button4) && {borderColor : '#FFD3D3'}]}>
            <TouchableOpacity activeOpacity={0.6} style={[styles.feelRound]}
            onPress={() => {
              setButton1(true)
              setButton2(true)
              setButton3(true)
              setButton4(!button4)
            }}>
              <Image source={require('../../assets/image/icon/profile_icon_red.png')} style={styles.signIcon}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputConatiner}>
          <Text style={styles.inputTitle}>닉네임</Text>
          <TextInput 
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="닉네임을 입력해주세요"
          />
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
    backgroundColor : '#FFD3D3', 
    alignItems : 'center'
  },
  signText:{
    fontFamily: 'NotoSansKR-Bold',
    fontSize : 20,
    color: '#555555'
  },
  iconList:{
    width : '75%',
    flexDirection: 'row',
    justifyContent : 'space-between',
    marginTop : 150,
  },
  iconContainer:{
    borderWidth : 8,
    borderColor : '#ffffff',
    borderRadius : 50,
  },
  signIcon:{
    width : 50,
    height : 50,

  },
  inputConatiner:{
    flexDirection : 'row',
    alignItems : 'center',
    marginBottom : 200,
    // backgroundColor : 'aqua'
  },
  inputTitle:{
    fontFamily: 'NotoSansKR-Bold',
    fontSize : 16,
    color: '#555555',
    marginRight : 20,
  },
  input:{
    borderBottomWidth : 0.6,
    width : '65%'
  }
})
