import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tempoary Button to allow to go to my screen so I can work</Text>
      <View style={{ marginTop: 20 }}>
        
        {/* Temporary Nav to Boooking Screen pending other screens availability */}
        <Link href="/screens/seeker/BookingCalendarScreen"  style={{
          backgroundColor:"#2862BC", 
          padding: 16, 
          color: "#fff",
          borderRadius: 12,
          overflow: 'hidden', 
          }}>
            Booking Screen
            </Link>
      </View>
    </View>
  );
}
