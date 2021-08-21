import React, { useState } from 'react';
import { View, StyleSheet,Text, TouchableOpacity, ScrollView } from 'react-native';

import CalendarStrip from 'react-native-calendar-strip';
import HomeMission from './Misson/HomeMisson';
import DayDiary from './DayDiary';
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions';
import { useNavigation } from '@react-navigation/native'

export default function WeekCalender() {
  const [dateSelect, setDateSelect] = useState(19)
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>월</Text>
        <Text style={styles.dayText}>화</Text>
        <Text style={styles.dayText}>수</Text>
        <Text style={styles.dayText}>목</Text>
        <Text style={styles.dayText}>금</Text>
        <Text style={styles.dayText}>토</Text>
        <Text style={styles.dayText}>일</Text>
      </View>

      <CalendarStrip
                    showMonth={false}
                    showDayName={false}
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'background', duration: 200}}
                    style={{width:'100%',height: 50, paddingBottom: 10, paddingHorizontal : 12, zIndex : 5}}
                    calendarHeaderStyle={{color: 'white'}}
                    calendarColor={'transparent'}
                    dateNumberStyle={{color: '#555555', fontSize : 14, fontFamily : 'NotoSansKR-Regular'}}
                    dateNameStyle={{color: '#555555'}}
                    highlightDateNumberStyle={{color: '#555555', fontSize : 14, fontFamily : 'NotoSansKR-Regular'}}
                    highlightDateNameStyle={{color: '#555555'}}
                    disabledDateNameStyle={{color: '#555555'}}
                    disabledDateNumberStyle={{color: '#555555'}}
                    // datesWhitelist={datesWhitelist}
                    // datesBlacklist={datesBlacklist}
                    // iconLeft={require('./img/left-arrow.png')}
                    // iconRight={require('./img/right-arrow.png')}
                    leftSelector={[]}
                    rightSelector={[]}
                    // iconContainer={{flex: 0.1}}
                    customDatesStyles= {['월', '화', '수', '목', '금', '토', '일']} 
                    onDateSelected={ date => setDateSelect(date.format('MM-DD-YYYY').substr(3,2)) }
                />
            
      <View style={styles.roundConatiner}>
        <View style={styles.round1}></View>
        <View style={styles.round2}></View>
        <View style={styles.round3}></View>
      </View>

      <View style={styles.boxContainer}>
        <View style={(dateSelect==16) ? styles.boxSelected : styles.box}></View>
        <View style={(dateSelect==17) ? styles.boxSelected : styles.box}></View>
        <View style={(dateSelect==18) ? styles.boxSelected : styles.box}></View>
        <View style={(dateSelect==19) ? styles.boxSelected : styles.box}></View>
        <View style={(dateSelect==20) ? styles.boxSelected : styles.box}></View>
        <View style={(dateSelect==21) ? styles.boxSelected : styles.box}></View>
        <View style={(dateSelect==22) ? styles.boxSelected : styles.box}></View>
      </View>

      <HomeMission props={dateSelect}/>

      <View style={styles.newChallenge}>
        <TouchableOpacity activeOpacity={0.4} style={styles.newChallengeButton} onPress={() => navigation.navigate('RandomTodo')}>
          <Text style={styles.newChallengeText}>새로운 도전! 저희가 추천해줄게요.</Text>
        </TouchableOpacity>
      </View>

      <DayDiary/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height : '100%',
    backgroundColor : '#ffffff'
  },
  dayContainer :{
    flexDirection : 'row',
    marginHorizontal: 30,
    marginTop : 20,
    justifyContent : 'space-between'
  },
  dayText : {
    zIndex: 3,
    fontFamily : 'NotoSansKR-Regular',
    lineHeight : 20,
    fontSize : 15,
  },
  roundConatiner:{
    zIndex : 1,
    position: 'absolute',
    top : 40,
    left: 0,
    right: 0,
    width : '100%',
    height : 40,
    flexDirection : 'row',
  },
  round1:{
    zIndex : 2,
    width : 36,
    height : 36,
    borderRadius : 18,
    backgroundColor : '#C5F6BD',
    marginLeft : 20,
    marginTop : 3,
  },
  round2:{
    width : 36,
    height : 36,
    borderRadius : 18,
    backgroundColor : '#FFED8C',
    marginLeft : 17,
    marginTop : 3,
  },
  round3:{
    width : 36,
    height : 36,
    borderRadius : 18,
    backgroundColor : '#FFED8C',
    marginLeft : 17,
    marginTop : 3,
  },
  boxContainer:{
    zIndex : 0,
    position: 'absolute',
    top : 15,
    left: 6,
    right: 0,
    width : '100%',
    height : 75,
    flexDirection : 'row',

  },
  box:{
    width : 45,
    height : 75,
    backgroundColor : '#FFFFFF',
    marginLeft: 8,
  },
  boxSelected:{
    width : 45,
    height : 75,
    backgroundColor : '#FFF5F5',
    marginLeft: 8,
  },
  newChallenge:{
    alignItems : 'center',
    marginTop : 20,
    marginBottom : 30,
  },
  newChallengeButton:{
    borderWidth : 1.5,
    borderRadius : 4,
    borderColor : '#FF9A9A'
  },
  newChallengeText:{
    fontFamily : 'NotoSansKR-Regular',
    color : '#555555',
    fontSize : 16,
    paddingHorizontal : 40,
    paddingVertical : 3,
  }
})