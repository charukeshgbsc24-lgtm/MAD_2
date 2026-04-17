import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { place } = route.params;

  const getStatusColor = status => {
    if (status === 'Available') return '#22c55e';
    if (status === 'Full') return '#ef4444';
    return '#9ca3af';
  };

  const openBooking = () => {
    navigation.navigate('Booking', { place });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parking Details</Text>

      <View style={styles.card}>
        <Text style={styles.name}>{place.name}</Text>

        <Text style={styles.info}>Distance: {place.distance}</Text>
        <Text style={styles.info}>Price: {place.price}</Text>

        <View
          style={[
            styles.statusBadge,
            { backgroundColor: getStatusColor(place.status) }
          ]}
        >
          <Text style={styles.statusText}>{place.status}</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.bookButton,
            {
              backgroundColor:
                place.status === 'Available'
                  ? '#2563eb'
                  : '#9ca3af'
            }
          ]}
          disabled={place.status !== 'Available'}
          onPress={openBooking}
        >
          <Text style={styles.bookButtonText}>
            {place.status === 'Available'
              ? 'Confirm Booking'
              : 'Unavailable'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111827'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    elevation: 5
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20
  },
  info: {
    fontSize: 18,
    marginBottom: 12,
    color: '#374151'
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 20
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  bookButton: {
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 15
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  backButton: {
    alignItems: 'center',
    marginTop: 10
  },
  backText: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
