import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

export default function HomeMission({props}) {
  const [missonList] = [
    "하루 한번 외출하기",
    "물 3잔 마시기",
    "따뜻한 차 한잔 마시기",
    "5분 동안 명상하기",
    "거울보고 30초동안 웃기",
    "책상 정리하기",
    "5분 스트레칭 하기",
    "산책하기"
  ]


  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [isSelected6, setSelection6] = useState(false);
  const [isSelected7, setSelection7] = useState(false);
  const [isSelected8, setSelection8] = useState(false);
  const [isSelected9, setSelection9] = useState(false);

  if(props == 16 ) {
    return (
      <View style={styles.container}>
        <View style={styles.missionListContainer}>
          <View style ={styles.missionContainer}>
            <CheckBox
              value={isSelected1}
              onValueChange={setSelection1}
              style={styles.checkbox}
              tintColors= {{ true : '#FFBDBD' }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.checkText}>거울보고 30초동안 웃기</Text>
            </View>
          </View>
          <View style ={styles.missionContainer}>
            <CheckBox
              value={isSelected2}
              onValueChange={setSelection2}
              style={styles.checkbox}
              tintColors= {{ true : '#FFBDBD' }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.checkText}>책상 정리하기</Text>
            </View>
          </View>

  
          <TouchableOpacity activeOpacity={0.4} style ={styles.missionButtonContainer}>
            <View style={styles.addButtonContainer}>
              <Text style={styles.buttonText}>새로운 사소 추가하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else if (props == 17){
    return (
      <View style={styles.container}>
        <View style={styles.missionListContainer}>
          <View style ={styles.missionContainer}>
            <CheckBox
              value={isSelected4}
              onValueChange={setSelection4}
              style={styles.checkbox}
              tintColors= {{ true : '#FFBDBD' }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.checkText}>산책하기</Text>
            </View>
          </View>
          <View style ={styles.missionContainer}>
            <CheckBox
              value={isSelected5}
              onValueChange={setSelection5}
              style={styles.checkbox}
              tintColors= {{ true : '#FFBDBD' }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.checkText}>따뜻한 차 한잔 마시기</Text>
            </View>
          </View>
  
  
          <TouchableOpacity activeOpacity={0.4} style ={styles.missionButtonContainer}>
            <View style={styles.addButtonContainer}>
              <Text style={styles.buttonText}>새로운 사소 추가하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else if(props == 18 ) {
    return (
      <View style={styles.container}>
        <View style={styles.missionListContainer}>
          <View style ={styles.missionContainer}>
            <CheckBox
              value={isSelected6}
              onValueChange={setSelection6}
              style={styles.checkbox}
              tintColors= {{ true : '#FFBDBD' }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.checkText}>이불 개기</Text>
            </View>
          </View>
          <View style ={styles.missionContainer}>
            <CheckBox
              value={isSelected7}
              onValueChange={setSelection7}
              style={styles.checkbox}
              tintColors= {{ true : '#FFBDBD' }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.checkText}>감사한 일 3가지 적기</Text>
            </View>
          </View>
          <View style ={styles.missionContainer}>
            <CheckBox
              value={isSelected3}
              onValueChange={setSelection3}
              style={styles.checkbox}
              tintColors= {{ true : '#FFBDBD' }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.checkText}>5분 동안 명상하기</Text>
            </View>
          </View>
  
          <TouchableOpacity activeOpacity={0.4} style ={styles.missionButtonContainer}>
            <View style={styles.addButtonContainer}>
              <Text style={styles.buttonText}>새로운 사소 추가하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  else if (props==19) {
    return (
      <View style={styles.container}>
        <View style={styles.missionListContainer}>
          <View style ={styles.missionContainer}>
            <CheckBox
              value={isSelected8}
              onValueChange={setSelection8}
              style={styles.checkbox}
              tintColors= {{ true : '#FFBDBD' }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.checkText}>하루 한 번 외출하기</Text>
            </View>
          </View>
          <View style ={styles.missionContainer}>
            <CheckBox
              value={isSelected9}
              onValueChange={setSelection9}
              style={styles.checkbox}
              tintColors= {{ true : '#FFBDBD' }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.checkText}>물 3잔 마시기</Text>
            </View>
          </View>
  
  
          <TouchableOpacity activeOpacity={0.4} style ={styles.missionButtonContainer}>
            <View style={styles.addButtonContainer}>
              <Text style={styles.buttonText}>새로운 사소 추가하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.missionListContainer}>

          <TouchableOpacity activeOpacity={0.4} style ={styles.missionButtonContainer}>
            <View style={styles.addButtonContainer}>
              <Text style={styles.buttonText}>새로운 사소 추가하기</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFEBEB',
    alignItems : 'center'
  },
  missionListContainer:{
    marginVertical : 20,
  },
  missionContainer:{
    flexDirection: 'row',
    alignItems : 'center',
    paddingVertical : 10,
    paddingHorizontal : 10,
    justifyContent: 'center'
  },
  checkbox:{
    
  },
  textContainer:{
    width : '80%',
    marginLeft : '3%',
    borderBottomWidth : 1,
    borderColor : '#B4B4B4',
    marginTop: 3,
    paddingBottom: 5,
  },
  checkText:{
    paddingLeft: 18,
    fontFamily: 'NotoSansKR-Regular',
    fontSize : 18,
    lineHeight : 28,
    color : '#555555',
  },
  missionButtonContainer:{
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent: 'center',
    paddingVertical : 10,
    paddingHorizontal : 10,
    marginTop : 10,
    
  },
  addButtonContainer:{
    width: 300,
    borderRadius: 30,
    backgroundColor: '#FFBDBD',
    alignItems : 'center',
    justifyContent : 'center',
    paddingVertical : 3,
  },
  buttonText:{
    color : '#555555',
    fontFamily: 'NotoSansKR-Regular',
    fontSize : 14,
  }
})