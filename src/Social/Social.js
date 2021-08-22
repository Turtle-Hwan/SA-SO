import { createRequire } from 'module';
import React from 'react';
import { Button, ScrollView, Text, View , StyleSheet} from 'react-native';

import Detail from './detail/Detail';

export default function Todo() {
  return (
    <View style={styles.container}>
      <View style={styles.titleConatiner}>
        <Text style={styles.titleText}>계획 게시판</Text>
      </View>
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>8월 21일</Text>
      </View>
      <ScrollView>
        <Detail imgPath={require(`../../assets/image/icon/profile_icon_yellow.png`)} name="자연적인새 93445" todo="아침 5분 스트레칭" />
        <Detail imgPath={require(`../../assets/image/icon/profile_icon_blue.png`)} name="자연적인곰 94745" todo="강아지 산책시키기"/>
        <Detail imgPath={require(`../../assets/image/icon/profile_icon_red.png`)} name="자유로운펭귄 345436" todo="매일 3km 런닝"/>
        <Detail imgPath={require(`../../assets/image/icon/profile_icon_green.png`)} name="깨끗한물고기 35521" todo="매일 물 2잔 마시기"/>
        <Detail imgPath={require(`../../assets/image/icon/profile_icon_yellow.png`)} name="자유로운펭귄 313086" todo="먹고나서 바로 설거지하기"/>
        <Detail imgPath={require(`../../assets/image/icon/profile_icon_red.png`)} name="자연적인새 9531" todo="주 1회 등산하기"/>
        <View style={styles.dummyView}></View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f0f0f0',
    // alignItems : 'center',
    // height: '100%'
  },
  containerWidth:{
    width : '90%',
  },
  titleConatiner: {
    backgroundColor: '#ffffff',
    height: 60,
    justifyContent: 'center',
    alignItems : 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dayContainer:{
    alignItems : 'center',
  },
  dummyView:{
    height:80,
  }
});