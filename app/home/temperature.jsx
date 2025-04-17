import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import BottomNavBar from '../../components/BottomNavbar'; // Assuming the path is correct
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Temperature = () => {
  const [currentTemperature, setCurrentTemperature] = useState('121K');
  const [currentStatus, setCurrentStatus] = useState('ON');
  const [warrantyExpire, setWarrantyExpire] = useState('April 24, 2026');

  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false); // New state for dropdown visibility

  const statusOptions = ['ON', 'OFF', 'Standby']; // Example status options

  const handleStatusSelect = (status) => {
    setCurrentStatus(status);
    setStatusDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Back Button */}
        <TouchableOpacity onPress={()=>router.push("/home")} style={styles.backButton} >
          <Ionicons name="arrow-back" size={24} color="#333" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Current Temperature */}
        <Text style={styles.label}>Current Temperature</Text>
        <View style={styles.input}>
          <Text style={styles.inputText}>{currentTemperature}</Text>
        </View>

        {/* Current Status */}
        <Text style={styles.label}>Current Status</Text>
        <TouchableOpacity style={styles.select} onPress={() => setStatusDropdownOpen(!statusDropdownOpen)}>
          <Text style={styles.selectText}>{currentStatus}</Text>
          <Ionicons name="chevron-down-outline" size={20} color="gray" />
        </TouchableOpacity>

        {/* Status Dropdown */}
        {statusDropdownOpen && ( // Conditionally render the dropdown
          <View style={styles.dropdown}>
            {statusOptions.map((option) => (
              <TouchableOpacity key={option} style={styles.dropdownOption} onPress={() => handleStatusSelect(option)}>
                <Text style={styles.dropdownOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Warranty Expire */}
        <Text style={styles.label}>Warranty Expire</Text>
        <View style={styles.input}>
          <Text style={styles.inputText}>{warrantyExpire}</Text>
        </View>
      </ScrollView>

      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
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
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    alignItems:"center",
    justifyContent:"center"
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    justifyContent:"center"
  },
  inputText:{
    fontSize: 16,
    color: '#333'
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  selectText: {
    fontSize: 16,
    color: '#333',
  },
  dropdown: {
    position: 'absolute', // Make it absolute
    top: 180, // Position it below the select component.  Adjust as necessary.
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    zIndex: 10, // Ensure it's above other elements
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  dropdownOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  dropdownOptionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Temperature;
