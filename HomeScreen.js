import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient colors={['#06080d', '#2a5298']} style={styles.container}>
      
      <Ionicons name="car-sport" size={60} color="white" />

      <Text style={styles.title}>Smart Parking Finder</Text>
      <Text style={styles.subtitle}>
        Find the Best Parking Spot Near You
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ParkingList')}
      >
        <Text style={styles.buttonText}>Find Parking →</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10
  },
  subtitle: {
    color: '#ddd',
    marginVertical: 15,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
