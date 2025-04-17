import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { router } from 'expo-router';
const BottomNavBar = () => {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const tabs = [
    {link:"home/index",name: 'Home', icon: <MaterialIcons name="add-home"  size={20} color="#BDBDBD" />, activeIcon: <MaterialIcons name="add-home"  size={20} color="#000" /> },
    {link:"home/control",name: 'Control', icon: <MaterialIcons name="settings-remote" size={20} color="#BDBDBD" />, activeIcon: <MaterialIcons name="settings-remote" size={20} color="#000" /> },
    {link:"home/schedule",name: 'Schedule', icon: <MaterialIcons name="schedule" size={20} color="#BDBDBD" />, activeIcon: <MaterialIcons name="schedule" size={20} color="#000" /> },
    {link:"home/logs",name: 'Logs', icon: <MaterialIcons name="newspaper" size={20} color="#BDBDBD" />, activeIcon: <MaterialIcons name="newspaper" size={20} color="#000" /> },
  ];

  return (
    <View style={[styles.navContainer, { paddingBottom: insets.bottom }]}>
      <View style={styles.navBar}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab.name} style={styles.navItem} onPress={() => router.push(tab?.link ==="home/index"?"home":tab?.link)}>
            {tab?.link === route?.name ? tab.activeIcon : tab.icon}
            <Text style={{textAlign:"center",color:tab?.link === route?.name?"#000":"#BDBDBD",fontWeight:"600",marginTop:2,fontSize:12}}>{tab?.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:12
  },
});

export default BottomNavBar;