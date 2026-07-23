import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { BOOKING_TYPES } from '../../constants/bookingTypes';
import { Info } from 'lucide-react-native';

export default function BookingTypeSection() {
    const [value, setValue] = useState('instant'); // Default selected option
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Booking Type</Text>
            <View style={styles.content} >
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: '#2862BC' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    containerStyle={styles.dropdownContainer}
                    itemStyle={styles.itemStyle}
                    itemTextStyle={styles.itemTextStyle}
                    data={BOOKING_TYPES}
                    maxHeight={200}
                    labelIcon="icon"
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select booking type' : '...'}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    // Custom dropdown arrow styling to look modern
                    iconStyle={styles.iconStyle}
                    activeColor="#F3F4F6"
                />

                <View style={styles.textContent} >
                    <Info color={'#2862BC'} />
                    <Text style={styles.text} >Your booking requires host approval before confirmation.</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    
        // marginTop: 20,

    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        marginRight: 16
    },
    dropdown: {
        width:'50%',
        height: 65,
        borderColor: '#E5E7EB',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#FFFFFF',
    },
    dropdownContainer: {
        borderRadius: 8,
        borderColor: '#E5E7EB',
        marginTop: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    placeholderStyle: {
        fontSize: 14,
        color: '#9CA3AF',
    },
    selectedTextStyle: {
        fontSize: 14,
        color: '#1F2937',
        fontWeight: '500',
    },
    iconStyle: {
        width: 20,
        height: 20,
        tintColor: '#4B5563',
    },
    itemStyle: {
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    itemTextStyle: {
        fontSize: 14,
        color: '#374151',
    },

    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
        marginTop: 24,
        marginBottom: 8
    },

    textContent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F6FE',
        padding: 10,
        borderRadius: 8,
        maxWidth: '50%',
        gap: 10,
        borderColor: '#2862BC',
        borderWidth: 1

    },
    text:{
        paddingRight: 16
    }
});
