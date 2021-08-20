import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

export default function DayDiary() {
  const [text, onChangeText] = useState("");

  const [button1, setButton1] = useState("false");
  const [button2, setButton2] = useState("false");
  const [button3, setButton3] = useState("false");
  const [button4, setButton4] = useState("false");

  return(
    <View style={styles.container}>
      <View style = {styles.widthContainer}>

        <Text style={styles.titleText}>하루 한 줄 일기</Text>

        <View>
          <TextInput 
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="오늘의 감상평을 남겨보세요."
          />
        </View>

      </View>
      <View style ={styles.feelList}>
          <View style={styles.feelContainer}>
            <TouchableOpacity activeOpacity={0.6} style={styles.feelRound} onPress={() => {
              setButton1(!button1)
              setButton2(true)
              setButton3(true)
              setButton4(true)
            }}>
              <Image source={require('../../../assets/image/icon/icon_check.png')}
              style={[styles.iconImage, (button1) && {opacity: 0}]} />
            </TouchableOpacity>
            <Text style={styles.feelText}>화나요</Text>
          </View>
          <View style={styles.feelContainer}>
            <TouchableOpacity activeOpacity={0.6} style={[styles.feelRound, {backgroundColor: '#B6EEE7'}]}
            onPress={() => {
              setButton1(true)
              setButton2(!button2)
              setButton3(true)
              setButton4(true)
            }}>
              <Image source={require('../../../assets/image/icon/icon_check.png')}
              style={[styles.iconImage, (button2) && {opacity: 0}]} />
            </TouchableOpacity>
            <Text style={styles.feelText}>우울해요</Text>
          </View>
          <View style={styles.feelContainer}>
            <TouchableOpacity activeOpacity={0.6} style={[styles.feelRound, {backgroundColor: '#C5F6BD'}]}
            onPress={() => {
              setButton1(true)
              setButton2(true)
              setButton3(!button3)
              setButton4(true)
            }}>
              <Image source={require('../../../assets/image/icon/icon_check.png')}
              style={[styles.iconImage, (button3) && {opacity: 0}]} />
            </TouchableOpacity>
            <Text style={styles.feelText}>평온해요</Text>
          </View>
          <View style={styles.feelContainer}>
            <TouchableOpacity activeOpacity={0.6} style={[styles.feelRound, {backgroundColor: '#FFED8C'}]}
            onPress={() => {
              setButton1(true)
              setButton2(true)
              setButton3(true)
              setButton4(!button4)
            }}>
              <Image source={require('../../../assets/image/icon/icon_check.png')}
              style={[styles.iconImage, (button4) && {opacity: 0}]} />
            </TouchableOpacity>
            <Text style={styles.feelText}>예민해요</Text>
          </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container :{
    alignItems : 'center',

  },
  widthContainer:{
    width: '90%',
  },
  titleText:{
    fontFamily: 'NotoSansKR-Bold',
    fontSize : 18,
    color : '#555555'
  },
  input:{
    borderBottomWidth : 0.8,
    borderColor : '#555555',
  },
  feelList :{
    flexDirection : 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop : 30,
  },
  feelContainer:{
    alignItems:'center'
  },
  feelRound:{
    width :24,
    height : 24,
    borderRadius : 12,
    backgroundColor : '#FFBDBD',
    alignItems : 'center',
    justifyContent : 'center'
  },
  feelText:{
    fontFamily : 'NotoSansKR-Regular',
    fontSize : 11,
    lineHeight : 18,
    color : '#555555',
    marginTop: 5,
  },
  iconImage:{
    width:12,
    height: 8
  }
})
