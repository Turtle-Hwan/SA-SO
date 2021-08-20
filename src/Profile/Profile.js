import React, { useState } from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

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
            </View>
          </View>
        </View>
      </View>

      <View style={styles.settingList}>
        <View style={styles.detailList}>
          <View style={[styles.containerWidth, styles.listTextContainer]}>
            <Text style={styles.listText}>알림 설정</Text>
            <ToggleSwitch
              isOn={toggle}
              onColor="#0A84FF"
              offColor="#C4C4C4"
              // labelStyle={{ color: "black", fontWeight: "900" }}
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
            <Text style={styles.versionText}>0.1.0</Text>
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
  },
  titleText:{
    fontSize: 22,
    fontWeight: 'bold',
  },
  myProfile:{
    flexDirection : 'row',
    height : 120,
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
  profileNameContainer:{

  },
  profileName:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  settingList:{
    marginTop: 18,
    width: '100%'
  },
  listTextContainer:{
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
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 11,
  },
  iconArrow:{
    width : 7,
    height: 10,
  },
  versionText:{
    fontSize : 14,
    fontWeight: 'bold'
  }
})