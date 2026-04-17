import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { id: '1', name: 'Parking A', slots: 5, distance: '1.2 km' },
  { id: '2', name: 'Parking B', slots: 2, distance: '2.5 km' },
  { id: '3', name: 'Parking C', slots: 0, distance: '3.1 km' },
];

export default function ParkingList({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>Available Parking Spots</Text>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput placeholder="Search location..." style={styles.input} />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>📍 {item.distance}</Text>

            <Text style={[
              styles.slots,
              { color: item.slots > 0 ? 'green' : 'red' }
            ]}>
              {item.slots > 0 ? `${item.slots} Slots` : 'Full'}
            </Text>

            <TouchableOpacity
              style={[
                styles.button,
                item.slots === 0 && styles.disabled
              ]}
              disabled={item.slots === 0}
              onPress={() => navigation.navigate('Booking', { parking: item })}
            >
              <Text style={styles.buttonText}>
                {item.slots === 0 ? 'Full' : 'Book Now'}
              </Text>
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f4f6f8' },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },

  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15
  },

  input: { marginLeft: 10 },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 5
  },

  name: { fontSize: 18, fontWeight: 'bold' },
  details: { color: 'gray', marginVertical: 5 },
  slots: { marginBottom: 10 },

  button: {
    backgroundColor: '#2980b9',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },

  disabled: { backgroundColor: '#ccc' },

  buttonText: { color: '#fff', fontWeight: 'bold' }
});
