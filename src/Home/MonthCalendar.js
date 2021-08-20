import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import AntDesign from 'react-native-vector-icons/AntDesign';

LocaleConfig.locales['fr'] = {
    monthNames: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
    dayNamesShort: ['일', '월','화','수','목','금','토'],
    // today: 'Aujourd\'hui'
  };
LocaleConfig.defaultLocale = 'fr';


const MonthCalendar = () => {

    return (
        <View style={styles.container}>
        <View style={styles.calendarContainer}>
            <Calendar
            // Initially visible month. Default = Date()
            current={'2021-08-21'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2020-01-01'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2021-12-31'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {console.log('selected day', day)}}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={(day) => {console.log('selected day', day)}}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'M'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => {console.log('month changed', month)}}
            // Hide month navigation arrows. Default = false
            hideArrows={false}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            renderArrow={(direction) => direction === "left" ? (
                <AntDesign name="caretleft" size={14} color="#8B8B8B" style={{marginLeft: 100}} />) : (<AntDesign name="caretright" size={14} color="#8B8B8B" style={{marginRight: 100}}/>)
            }
            // Do not show days of other months in month page. Default = false
            hideExtraDays={false}
            // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={false}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={7}
            // Hide day names. Default = false
            hideDayNames={false}
            // Show week numbers to the left. Default = false
            showWeekNumbers={false}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={substractMonth => substractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={false}
            // Disable right arrow. Default = false
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#555555',
                selectedDayTextColor: '#555555',
                dayTextColor: '#555555',
                disabledArrowColor: '#efefef',
                monthTextColor: '#000000',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: 'normal',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: 'normal',
                textDayFontSize: 14,
                textMonthFontSize: 20,
                textDayHeaderFontSize: 14,
                'stylesheet.calendar.header': {
                    week: {
                      marginTop: 15,
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }
                  },
            }}
            markedDates={{
                '2021-08-01': {selected: true, selectedColor: '#C5F7BD'},
                '2021-08-02': {selected: true, selectedColor: '#B6EEE7'},
                '2021-08-03': {selected: true, selectedColor: '#FFBDBD'},
                '2021-08-04': {selected: true, selectedColor: '#FFED8C'},
                '2021-08-05': {selected: true, selectedColor: '#C5F7BD'},
                '2021-08-06': {selected: true, selectedColor: '#B6EEE7'},
                '2021-08-07': {selected: true, selectedColor: '#FFBDBD'},
                '2021-08-08': {selected: true, selectedColor: '#FFED8C'},
                '2021-08-09': {selected: true, selectedColor: '#C5F7BD'},
                '2021-08-10': {selected: true, selectedColor: '#B6EEE7'},
                '2021-08-11': {selected: true, selectedColor: '#FFBDBD'},
                '2021-08-12': {selected: true, selectedColor: '#FFED8C'},
                '2021-08-13': {selected: true, selectedColor: '#FFED8C'},
                '2021-08-14': {selected: true, selectedColor: '#FFED8C'},
                '2021-08-15': {selected: true, selectedColor: '#C5F7BD'},
                '2021-08-16': {selected: true, selectedColor: '#B6EEE7'},
                '2021-08-17': {selected: true, selectedColor: '#FFBDBD'},
                '2021-08-18': {selected: true, selectedColor: '#FFED8C'},
                '2021-08-19': {selected: true, selectedColor: '#C5F7BD'},
                '2021-08-20': {selected: true, selectedColor: '#B6EEE7'},
                '2021-08-21': {selected: true, selectedColor: '#FFBDBD'},
                '2021-07-26': {selected: true, selectedColor: '#B6EEE7'},
                '2021-07-27': {selected: true, selectedColor: '#FFBDBD'},
                '2021-07-28': {selected: true, selectedColor: '#FFED8C'},
                '2021-07-29': {selected: true, selectedColor: '#C5F7BD'},
                '2021-07-30': {selected: true, selectedColor: '#B6EEE7'},
                '2021-07-31': {selected: true, selectedColor: '#FFBDBD'},
            }}
            />
        </View>
        <View style={styles.toDoContainer}>
               <Text>todo</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: '100%',
        // height: '100%',
        backgroundColor: '#ffffff',
    },
    calendarContainer: {
        paddingHorizontal: 28,
        marginTop: 60,
    },
    toDoContainer: {
        backgroundColor: '#FFEBEB',
        height: 280,
        marginTop: 30,
    }
});

export default MonthCalendar;