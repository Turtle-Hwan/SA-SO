import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import AntDesign from 'react-native-vector-icons/AntDesign';

LocaleConfig.locales['ko'] = {
    monthNames: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
    dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
    dayNamesShort: ['일', '월','화','수','목','금','토'],
    // today: 'Aujourd\'hui'
  };
LocaleConfig.defaultLocale = 'ko';


const MonthCalendar = () => {

    return (
        <View style={styles.container}>
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
            <AntDesign name="left" size={20} color="#50cebb" />) : (<AntDesign name="right" size={20} color="#50cebb" />)
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
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
                // renderHeader={(date) => <Text>{date}</Text>}
        markedDates={{
            '2021-08-16': {selected: true, selectedColor: 'blue', activeOpacity: 0.4},
        }}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        height: '100%',
    }
});

export default MonthCalendar;