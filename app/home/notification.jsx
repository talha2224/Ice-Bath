import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons
import BottomNavBar from '../../components/BottomNavbar'; // Assuming the path is correct
import { router } from 'expo-router';

const Notification = () => {
  // Dummy data for notifications - Replace with your actual data
  const notifications = [
    {
      id: 1,
      type: 'Welcome',
      title: 'Welcome to Ice Bath',
      time: '9:45 AM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      type: 'Session',
      title: 'Session Done',
      time: 'Oct 25, 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      type: 'Missed',
      title: 'Missed Session',
      time: 'Oct 25, 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
        {
      id: 4,
      type: 'Welcome',
      title: 'Welcome to Ice Bath',
      time: '9:45 AM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      type: 'Session',
      title: 'Session Done',
      time: 'Oct 25, 2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // {
    //   id: 6,
    //   type: 'Missed',
    //   title: 'Missed Session',
    //   time: 'Oct 25, 2022',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>router.push("/home/profile")} style={styles.backButton} >
          <Ionicons name="arrow-back" size={24} color="#fff" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for potential right-side icon/button */}
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Notification Items */}
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            {/* Icon based on notification type */}
            {notification.type === 'Welcome' && (
              <Ionicons name="checkmark-circle-outline" size={24} color="#4CAF50" style={styles.icon} />
            )}
            {notification.type === 'Session' && (
              <Ionicons name="checkmark-circle-outline" size={24} color="#4CAF50" style={styles.icon} />
            )}
            {notification.type === 'Missed' && (
              <Ionicons name="close-circle-outline" size={24} color="#FF5252" style={styles.icon} />
            )}

            <View style={styles.textContainer}>
                <View style = {styles.titleAndTime}>
                  <Text style={styles.notificationTitle}>{notification.title}</Text>
                  <Text style={styles.notificationTime}>{notification.time}</Text>
                </View>

              <Text style={styles.notificationDescription}>
                {notification.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#3B3C37",
    paddingTop: 50,
    paddingBottom: 30
},
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to the start vertically
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  icon: {
    marginRight: 15,
    marginTop: 5, // Adjust top margin as needed for vertical alignment
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: 'gray',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
  },
   titleAndTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  }
});

export default Notification;
