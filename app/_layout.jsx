import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="screens/seeker/BookingCalendarScreen"
          options={{ title: 'Booking Details' }}
        />
      </Stack>
    </>
  )
}

