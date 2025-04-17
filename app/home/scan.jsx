import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Qr from '../../assets/images/home/qr.png';
import { router } from 'expo-router';

const Scan = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>router.push("/home")}>
          <Ionicons name="close-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scan Code</Text>
        <View style={{ width: 30 }} />
      </View>

      {/* QR Code Area */}
      <View style={styles.qrContainer}>
        <View style={styles.scanArea}>
          <Image source={Qr} style={styles.qrImage} resizeMode="contain" />
          <View style={styles.scanLines} />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>router.push("/home")} style={styles.scanButton}>
          <Text style={styles.scanButtonText}>Scan QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>router.push("/home")} style={styles.manualButton}>
          <Text style={styles.manualButtonText}>ENTER CODE MANUALLY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50, // Adjust for status bar
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    
    color: '#fff',
  },
  qrContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanArea: {
    width: 250,
    height: 250,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Clip the scan lines
  },
  qrImage: {
    width: '80%',
    height: '80%',
  },
  scanLines: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderWidth: 4,
    borderColor: '#50fa7b', // Green color for scan lines
    borderRadius: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  scanButton: {
    backgroundColor: '#50fa7b', // Green color for the button
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  scanButtonText: {
    color: '#000',
    fontSize: 18,
    
  },
  manualButton: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  manualButtonText: {
    color: '#fff',
    fontSize: 16,
    
  },
});

export default Scan;