


import { StyleSheet, Text, View } from 'react-native'
const WorkSpaceTag = ({ label }) => {
    return (
        <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{label}</Text>
        </View>
    )
}
export default WorkSpaceTag
const styles = StyleSheet.create({
    tagContainer: {
        backgroundColor: '#2862BC', 
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,            
        alignSelf: 'flex-start',    
        marginTop: 8,
    },
    tagText: {
        color: '#F5F5F5',           
        fontSize: 13,
        fontWeight: '600',          
    },
})