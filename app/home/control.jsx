import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavBar from '../../components/BottomNavbar'; // Assuming the path is correct
import { router } from 'expo-router';

const Control = () => {
    const [temperature, setTemperature] = useState('3C');
    const [readyIn, setReadyIn] = useState('5mins');
    const [isIceBathEnabled, setIsIceBathEnabled] = useState(false);
    const [bathModel, setBathModel] = useState('AB12CD');
    const [bathSerial, setBathSerial] = useState('AB12CD');
    const [dischargePressure, setDischargePressure] = useState('5mins');

    return (
        <View style={styles.container}>


            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity></TouchableOpacity>
                    <Text style={styles.headerTitle}></Text>
                    <TouchableOpacity>
                        <Ionicons name="wifi-outline" size={30} color="#333" />
                    </TouchableOpacity>
                </View>

                {/* Content */}
                <View style={styles.content}>
                    {/* Temperature Setpoint */}
                    <Text style={styles.label}>Temperature Setpoint</Text>
                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={styles.dropdownText}>{temperature}</Text>
                        <Ionicons name="chevron-down-outline" size={20} color="gray" />
                    </TouchableOpacity>

                    {/* Bath Ready In */}
                    <Text style={styles.label}>Bath Ready In</Text>
                    <TextInput style={styles.input} value={readyIn}onChangeText={setReadyIn}/>

                    {/* Ice bath Toggle */}
                    <View style={styles.toggleContainer}>
                        <Text style={styles.label}>Ice bath</Text>
                        <Switch value={isIceBathEnabled} onValueChange={setIsIceBathEnabled} trackColor={{ false: '#767577', true: '#50fa7b' }} thumbColor={isIceBathEnabled ? '#f4f3f4' : '#f4f3f4'}/>
                    </View>

                    {/* Get In Button */}
                    <TouchableOpacity onPress={()=>router.push("/home/single")} style={styles.getInButton}>
                        <Text style={styles.getInButtonText}>GET IN</Text>
                    </TouchableOpacity>

                    {/* Bath Model */}
                    <Text style={styles.label}>Bath Model</Text>
                    <TextInput style={styles.input}value={bathModel}onChangeText={setBathModel}/>

                    {/* Bath Serial */}
                    <Text style={styles.label}>Bath Serial</Text>
                    <TextInput style={styles.input} value={bathSerial} onChangeText={setBathSerial}/>

                    {/* Discharge Pressure */}
                    <Text style={styles.label}>Discharge Pressure</Text>
                    <TextInput style={styles.input} value={dischargePressure} onChangeText={setDischargePressure}/>
                </View>

            </ScrollView>

            {/* Bottom Navigation Bar */}
            <BottomNavBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom:80
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
        color: '#333',
    },
    dropdown: {
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
    dropdownText: {
        fontSize: 16,
        color: '#333',
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    getInButton: {
        backgroundColor: '#333',
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 30,
    },
    getInButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Control;