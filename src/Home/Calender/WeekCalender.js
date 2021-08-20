import React, { useState } from 'react';
import { View, StyleSheet,Text, TouchableOpacity, ScrollView } from 'react-native';

import CalendarStrip from 'react-native-calendar-strip';
import HomeMission from './Misson/HomeMisson';
import DayDiary from './DayDiary';

export default function WeekCalender() {
  const [dateSelect, setDateSelect] = useState()

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
                    // daySelectionAnimation={{type: 'background', duration: 200, highlightColor: '#ffffff'}}
                    style={{width:'100%',height: 50, paddingBottom: 10, paddingHorizontal : 12}}
                    calendarHeaderStyle={{color: 'white'}}
                    calendarColor={'white'}
                    dateNumberStyle={{color: '#555555'}}
                    dateNameStyle={{color: '#555555'}}
                    highlightDateNumberStyle={{color: '#FFBDBD'}}
                    highlightDateNameStyle={{color: '#FFBDBD'}}
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
      <HomeMission/>

      <View style={styles.newChallenge}>
        <TouchableOpacity activeOpacity={0.4} style={styles.newChallengeButton}>
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
    fontFamily : 'NotoSansKR-Regular',
    lineHeight : 20,
    fontSize : 15,
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