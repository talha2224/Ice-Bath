import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import BottomNavBar from '../../components/BottomNavbar'; // Assuming the path is correct
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Single = () => {
  const [alarm, setAlarm] = useState('20C');
  const [pump, setPump] = useState('ON');
  const [compressor, setCompressor] = useState('ON');
  const [highTempAvoidance, setHighTempAvoidance] = useState('ON');
  const [light,] = useState('ON');
  const [outdoorFanSpeed, setOutdoorFanSpeed] = useState('15km/hr');

  const handleResetAlarm = () => {
    console.log('Reset Alarm clicked');
    setAlarm(''); //reset alarm
    router.push("/home/control")
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Back Button */}
        <TouchableOpacity onPress={()=>router.push("/home/control")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Current Alarm */}
        <Text style={styles.sectionTitle}>Current Alarm</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{alarm || 'No Alarm'}</Text>
        </View>

        {/* Pump Status */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Pump</Text>
          <View style={styles.statusBox}>
            <Text style={styles.statusText}>{pump}</Text>
          </View>
        </View>

        {/* Compressor Status */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Compressor</Text>
          <View style={styles.statusBox}>
            <Text style={styles.statusText}>{compressor}</Text>
          </View>
        </View>

        {/* High-Temperature Avoidance */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>High-temperature Avoidance</Text>
          <View style={styles.statusBox}>
            <Text style={styles.statusText}>{highTempAvoidance}</Text>
          </View>
        </View>

        {/* Light Status */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusLabel}>Light</Text>
          <View style={styles.statusBox}>
            <Text style={styles.statusText}>{light}</Text>
          </View>
        </View>

        {/* Outdoor Fan Speed */}
        <Text style={styles.sectionTitle}>Outdoor fan speed</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{outdoorFanSpeed}</Text>
        </View>

        {/* Reset Alarm Button */}
        <TouchableOpacity style={styles.resetButton} onPress={handleResetAlarm}>
          <Text style={styles.resetButtonText}>Reset Alarm</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:30
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#333',
    fontSize: 18,
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusLabel: {
    fontSize: 16,
    color: '#333',
  },
  statusBox: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    color: '#333',
  },
  resetButton: {
    backgroundColor: '#333',
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  resetButtonText: {
    color: '#fff',
    fontSize:16,
  },
});

export default Single;
