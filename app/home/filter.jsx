import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons
import BottomNavBar from '../../components/BottomNavbar'; // Assuming the path is correct
import logsImg from '../../assets/images/home/logs.png'
import { router } from 'expo-router';

const Filter = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
    <TouchableOpacity onPress={()=>router.push("/home/profile")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filter Change</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for potential right-side icon/button */}
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Date */}
        <Text style={styles.date}>Yesterday</Text>

        {/* Text Content */}
        <Text style={styles.textContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Molestie id
          velit facilisis faucibus morbi. Cursus morbi dolor vulputate
          pellentesque facilisis quis amet, tortor, velit. Auctor pellentesque
          pharetra diam volutpat. Mauris luctus nulla vel, scelerisque massa
          semper nunc. Consectetur tellus augue id arcu sed eget feugiat non.
        </Text>

        {/* Image */}
        <Image
          source={logsImg} // Replace with actual image URL
          style={styles.image}
        />
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:60, // Adjust for status bar
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#333',
    fontSize: 18,
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'right'
  },
  textContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24, // Add line height for better readability
    marginBottom: 20,
  },
  image: {
    width: '100%', // Make image fill its container
    height: 150,    // Fixed height, or adjust as needed
    borderRadius: 8, // Rounded corners
    resizeMode: 'cover', // Or 'contain', depending on desired behavior
  },
});

export default Filter;
