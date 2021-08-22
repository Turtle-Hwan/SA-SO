import React, { useState } from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import ToggleSwitch from 'toggle-switch-react-native'

export default function Profile() {
  const[toggle, setToggle] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.containerWidth}>
        <View style={styles.titleConatiner}>
          <Text style={styles.titleText}>마이페이지</Text>
        </View>
        <View style={styles.myProfile}>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/image/icon/profile_icon.png')} style={styles.iconImage} />
          </View>
          <View style={styles.profileTextContainer}>
            <View style={styles.profileNameContainer}>
              <Text style={styles.profileName}>김가네 라볶이</Text>
              <SimpleLineIcons name="pencil" size={18} style={{paddingLeft: 12, color: '#8B8B8B'}}></SimpleLineIcons>
            </View>
          </View>
        </View>
      </View>
      <View style={{width:'100%', height: 3, backgroundColor:'#F3F3F3'}}></View>

      <View style={styles.settingList}>
        <Text style={styles.infoText}>정보</Text>
        <View style={styles.detailList}>
          <View style={[styles.containerWidth, styles.listTextContainer]}>
            <Text style={styles.listText}>알림 설정</Text>
            <ToggleSwitch
              isOn={toggle}
              onColor="#FFD3D3"
              offColor="#C4C4C4"
              size="small"
              onToggle={() => {setToggle(!toggle)}}
            />
          </View>
        </View>
        <View style={styles.detailList}>
          <View style={[styles.containerWidth, styles.listTextContainer]}>
            <Text style={styles.listText}>공지사항</Text>
            <Image source={require('../../assets/image/icon/icon_right_arrow.png')} style={styles.iconArrow} />
          </View>
        </View>
        <View style={styles.detailList}>
          <View style={[styles.containerWidth, styles.listTextContainer]}>
            <Text style={styles.listText}>이용약관</Text>
            <Image source={require('../../assets/image/icon/icon_right_arrow.png')} style={styles.iconArrow} />
          </View>
        </View>
        <View style={styles.detailList}>
          <View style={[styles.containerWidth, styles.listTextContainer]}>
            <Text style={styles.listText}>개인정보이용정책</Text>
            <Image source={require('../../assets/image/icon/icon_right_arrow.png')} style={styles.iconArrow} />
          </View>
        </View>
        <View style={styles.detailList}>
          <View style={[styles.containerWidth, styles.listTextContainer]}>
            <Text style={styles.listText}>버전정보</Text>
            <Text style={styles.versionText}>1.0 Ver</Text>
          </View>
        </View>
        <View style={styles.detailList}>
          <View style={[styles.containerWidth, styles.listTextContainer]}>
            <Text style={styles.listText}>1:1문의</Text>
            <Image source={require('../../assets/image/icon/icon_right_arrow.png')} style={styles.iconArrow} />
          </View>
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffffff',
    alignItems : 'center',
    height: '100%'
  },
  containerWidth:{
    width : '90%',
  },
  titleConatiner:{
    height : 60,
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row'
  },
  titleText:{
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myProfile:{
    flexDirection : 'row',
    height : 120,
  },
  leftArrowImage:{
    height : 20,
    width : 12,
  },
  iconContainer:{
    flex: 2,
    alignItems : 'center',
    justifyContent : 'center'
  },
  iconImage:{
    width : 60,
    height : 60
  },
  profileTextContainer:{
    flex: 5,
    justifyContent: 'center',
    paddingLeft : 20,
  },
  profileName:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingList:{
    marginTop: 18,
    width: '100%'
  },
  infoText: {
    fontSize: 19,
    fontFamily: 'Noto Sans KR',
    paddingLeft: 18,
    paddingTop: 28,
    paddingBottom: 11,
  },
  listTextContainer: {
    paddingVertical: 14,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
  },
  detailList:{
    borderTopWidth: 1,
    borderColor: '#F3F3F3',
    alignItems : 'center',
  },
  listText:{
    fontFamily: 'Noto Sans KR',
    fontSize: 18,
    color: '#555555'
  },
  iconArrow:{
    width : 7,
    height: 10,
  },
  versionText: {
    fontFamily: 'Noto Sans KR',
    fontSize: 16,
    color: '#555555'
  }
})