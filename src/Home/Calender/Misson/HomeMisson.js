import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

export default function HomeMission() {
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);

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
            <Text style={styles.checkText}>산책하기</Text>
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