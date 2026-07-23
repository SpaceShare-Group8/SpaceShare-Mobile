
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TIME_SLOTS } from '../../constants/timeSlots';


const TimeSlotPicker = () => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    // Mocking booked slots (e.g., 13:00-14:00 is grayed out in your UI)
    const bookedSlots = ['1', '8'];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Available Time Slots (Hourly)</Text>

            <View style={styles.grid}>
                {/* 2. Map through the array directly */}
                {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedSlot === slot.id;
                    const isDisabled = bookedSlots.includes(slot.id);

                    return (
                        <TouchableOpacity
                            key={slot.id}
                            disabled={isDisabled}
                            onPress={() => setSelectedSlot(slot.id)}
                            style={[
                                styles.slotButton,
                                isSelected && styles.selectedButton,
                                isDisabled && styles.disabledButton,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.slotText,
                                    isSelected && styles.selectedText,
                                    isDisabled && styles.disabledText,
                                ]}
                            >
                                {slot.time}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

export default TimeSlotPicker


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginTop: 24,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 12,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 8, // Creates modern uniform grid gaps
    },
    slotButton: {
        // Math logic: (100% width / 4 items) minus approximate gap allowance
        width: '23%',
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedButton: {
        backgroundColor: '#1A56DB', // Matches your primary blue UI color
        borderColor: '#1A56DB',
    },
    disabledButton: {
        backgroundColor: '#E5E7EB',
        borderColor: '#E5E7EB',
    },
    slotText: {
        fontSize: 11,
        fontWeight: '500',
        color: '#374151',
    },
    selectedText: {
        color: '#FFFFFF',
    },
    disabledText: {
        color: '#9CA3AF',
        textDecorationLine: 'none', // Keeps it clean like your design blueprint
    },
});
