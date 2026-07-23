

import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image';
import WorkSpaceTag from '../../components/WorkSpaceTag';
import { MapPin, Star } from 'lucide-react-native';
import CalenderScreen from '../../components/Calender';
import TimeSlotPicker from '../../components/TimeSlotPicker';
import BookingType from '../../components/BookingType';


const { width } = Dimensions.get('window');

const BookingCalendarScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/SpaceShareImage/Booking-Hero-img.png')}
          style={styles.heroImage}
          contentFit="cover"
          transition={200}
        />
      </View>
      <View style={styles.wrapper}>
        <WorkSpaceTag label="Co-working Space " />
        <View style={styles.detailsBlock}>
          <Text style={styles.titleText}>Hub One Workspace</Text>
          <Text style={styles.descriptionText}>A modern style of meeting room perfect for conference and exclusive meetings.</Text>

          <View style={styles.locationWrapper}>
            <View style={styles.locationContainer}>
              <MapPin size={16} color="#2862BC" style={styles.icon} />
              <Text style={styles.locationText}>Lekki phase one, Lagos.</Text>
            </View>
            <Text style={styles.locationDistanceText} >2.5 km away</Text>
          </View>

          <View style={styles.ratingsWrapper}>
            <View style={styles.ratingsContainer}>

              <Star size={16} fill="#FFC107" strokeWidth={0} style={styles.starIcon} />
              <Text style={styles.ratingText}>
                4.8 <Text style={styles.reviewCountText}>(120 reviews)</Text>
              </Text>
            </View>
            <Text style={styles.rateText}>₦15,000<Text style={styles.perHourText}> / hour</Text></Text>
          </View>
        </View>
      </View>
      <View>
        <View>
            <BookingType />
        </View>
        <View style={styles.calenderContainer} >
          <Text style={styles.calenderTitle} >Select Date</Text>
          <CalenderScreen />
        </View>
      </View>

      <View>
        <TimeSlotPicker />
      </View>


    </ScrollView>
  )
}
export default BookingCalendarScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  wrapper: {
    marginHorizontal: 16,
  },

  imageContainer: {

  },
  heroImage: {
    width: width - 32,
    height: 200,
    alignSelf: 'center',
    marginVertical: 16,
    borderRadius: 12,
  },

  detailsBlock: {
    marginTop: 12,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 12,
  },

  locationWrapper: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,

  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 4,
  },
  locationText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
  },

  locationDistanceText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },

  ratingsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 12,
    marginTop: 4,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  reviewCountText: {
    fontWeight: '400',
    color: '#6B7280',
  },
  rateText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
  },
  perHourText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6B7280',
  },

  calenderContainer: {
    marginTop: 20
  },

  calenderTitle: {
    fontSize: 16,
    marginHorizontal: 16,
    fontWeight: '600'
  },

});