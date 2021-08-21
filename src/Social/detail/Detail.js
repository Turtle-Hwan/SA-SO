import { createRequire } from 'module';
import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

export default function Detail(p) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={require(`../../../assets/image/icon/profile_icon_yellow.png`)} style={styles.iconImage} />
      </View>

      <View style={styles.listContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{p.Todo}</Text>
          <Text style={styles.textUserName}>{p.name}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flexDirection : 'row',
    height : 120,
    backgroundColor: '#ffffff',
    marginBottom:1,
    
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
