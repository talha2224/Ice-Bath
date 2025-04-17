import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import BottomNavBar from '../../components/BottomNavbar'; // Assuming the path is correct
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// Dummy data for Ice Bath entries
const iceBathEntries = [
    { id: 1, title: 'Ice Bath', price: '$200', image: require('../../assets/images/home/logs.png') },
    { id: 2, title: 'Ice Bath', price: '$200', image: require('../../assets/images/home/logs.png') },
    { id: 3, title: 'Ice Bath', price: '$200', image: require('../../assets/images/home/logs.png') },
    { id: 4, title: 'Ice Bath', price: '$200', image: require('../../assets/images/home/logs.png') },
    { id: 5, title: 'Ice Bath', price: '$200', image: require('../../assets/images/home/logs.png') },
];

const Log = () => {
    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity onPress={()=>router.push("/home/logs")} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#333" />
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <ScrollView style={styles.scrollView}>
                {iceBathEntries.map((entry) => (
                    <View key={entry.id} style={styles.entryContainer}>
                        <Image source={entry.image} style={{width:300,height:130,marginBottom:20,borderRadius:10}} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30, // Adjust as needed for status bar
    },
    scrollView: {
        flex: 1,
        padding: 20,
    },
     backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal:20
    },
    backButtonText: {
        color: '#333',
        fontSize: 18,
        marginLeft: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    entryContainer: {
        alignItems: 'center'
    },
    entryImage: {
        width: 100, // Adjust as needed
        height: 100, // Adjust as needed
        borderRadius: 8,
        marginRight: 15,
    },
    entryDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    entryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    entryPrice: {
        fontSize: 16,
        color: '#888', // Grayed out price
    },
});

export default Log;
