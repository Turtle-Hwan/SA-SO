import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={require('../../../assets/image/icon/profile_icon.png')} style={styles.iconImage} />
      </View>

      <View style={styles.listContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>걸어서 출근하기</Text>
          <Text style={styles.textUserName}>유저이름</Text>
        </View>
        {/* <View style={styles.batteryContainer}>
          <View style={[styles.battery,styles.batteryOne]}></View>
          <View style={[styles.battery,styles.batteryTwo]}></View>
          <View style={[styles.battery,styles.batteryThree]}></View>
          <View style={[styles.battery,styles.batteryFour]}></View>
          <View style={[styles.battery,styles.batteryFive]}></View>
          <View style={[styles.battery,styles.batterySix]}></View>
          <View style={[styles.battery,styles.batterySeven]}></View>
        </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flexDirection : 'row',
    height : 120,
    backgroundColor : '#f0f0f0',
    marginBottom:20,
  },
  iconContainer:{
    flex: 2,
    alignItems : 'center',
    justifyContent : 'center',
    
  },
  iconImage:{
    width : 60,
    height : 60
  },
  listContainer:{
    flex: 5,
    justifyContent: 'center',
    paddingLeft : 20,
  },
  textUserName:{
    paddingTop : 7,
  },
  textContainer:{

  },
  textTitle:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  batteryContainer:{
    marginTop : 10,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width : 160,

  },
  battery:{
    width: 20,
    height : 30,
    marginVertical: 3,
    marginRight: 2,
  },
  batteryOne:{
    marginLeft : 4,
    backgroundColor: '#EB5757',
  },
  batteryTwo:{
    backgroundColor: '#F2994A',
  },
  batteryThree:{
    backgroundColor: '#F2C94C',
  },
  batteryFour:{
    backgroundColor: '#6FCF97',
  },
  batteryFive:{
    backgroundColor: '#56CCF2',
  },
  batterySix:{
    backgroundColor: '#2D9CDB',
  },
  batterySeven:{
    backgroundColor: '#2F80ED',
  }
})
