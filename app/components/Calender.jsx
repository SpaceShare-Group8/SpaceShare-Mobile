

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalenderScreen = () => {
  const [selectedDate, setSelectedDate] = useState('2026-07-03');

  // Define unavailable dates based on the grayed-out look in your design
  const disabledDates = {
    '2026-07-01': { disabled: true, disableTouchEvent: true },
    '2026-07-08': { disabled: true, disableTouchEvent: true },
    '2026-07-17': { disabled: true, disableTouchEvent: true },
  };

  return (
    <View style={styles.container}>
      <Calendar
        // Initial date matching your UI header (July 2026)
        current={'2026-07-01'}
        
        // Handle date selection
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        
        // Merge disabled states with the active selection style
        markedDates={{
          ...disabledDates,
          [selectedDate]: {
            selected: true,
            selectedColor: '#2862BC', 
            selectedTextColor: '#FFFFFF',
          },
        }}
        
        // Theme customization to match the clean design
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#4B5563', 
          selectedDayBackgroundColor: '#2862BC',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#2862BC',
          dayTextColor: '#1F2937',
          textDisabledColor: '#D9D9D9', 
          arrowColor: '#1F2937',
          monthTextColor: '#1F2937',
          textMonthFontWeight: '600',
          textDayHeaderFontWeight: '500',
          textDayFontSize: 14,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 13,

        }}
        
        // Hide extra days from previous/next months to clean up the look
        hideExtraDays={true}
      />
    </View>
  );
}

export default CalenderScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 8,
    margin: 16,
  },
});
