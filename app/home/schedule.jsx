import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput, Platform, Dimensions, Pressable, Linking } from 'react-native';
import BottomNavBar from '../../components/BottomNavbar';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState('Monday');
    const [bathOnTime, setBathOnTime] = useState('12:00 PM');
    const [bathOffTime, setBathOffTime] = useState('12:00 AM');
    const [temperatureSetpoint, setTemperatureSetpoint] = useState('121K');
    const [isSaved, setIsSaved] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false)

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const [times, setTimes] = useState([]);  // State to hold time options

    const handleShopPress = () => {
        Linking.openURL('https://nebula-me.ae/');
      };
    useEffect(() => {
        setTimes(generateTimes());
    }, []);

    const handleSave = () => {
        console.log('Schedule Saved:', {
            selectedDay,
            bathOnTime,
            bathOffTime,
            temperatureSetpoint,
        });
        setIsSaved(true);
    };

    const handleCancel = () => {
        setIsSaved(false);
    };

    function generateTimes() {
        const times = [];
        const periods = ['AM', 'PM'];
        for (let hour = 12; hour <= 11; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour}:${minute.toString().padStart(2, '0')} AM`;
                times.push(time);
            }
        }
        for (let hour = 12; hour <= 11; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour}:${minute.toString().padStart(2, '0')} PM`;
                times.push(time);
            }
        }
        return times;
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setShowSidebar(!showSidebar)}>
                        <Ionicons name="menu-outline" size={30} color="#333" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push("/home/profile")}>
                        <Ionicons name="person-circle-outline" size={30} color="#333" />
                    </TouchableOpacity>
                </View>
                {isSaved && (
                    <View style={styles.successMessage}>
                        <Text style={styles.successText}>Successfully Saved</Text>
                    </View>
                )}

                <Text style={styles.label}>Day</Text>
                <Picker
                    selectedValue={selectedDay}
                    onValueChange={(itemValue) => setSelectedDay(itemValue)}
                    style={styles.picker}
                >
                    {days.map((day) => (
                        <Picker.Item key={day} label={day} value={day} />
                    ))}
                </Picker>

                <Text style={styles.sectionTitle}>Ice Bath Schedule</Text>
                <View style={styles.timeContainer}>
                    <View style={styles.timePickerContainer}>
                        <Text style={styles.label}>Bath On</Text>
                        <Picker
                            selectedValue={bathOnTime}
                            onValueChange={(itemValue) => setBathOnTime(itemValue)}
                            style={styles.timePicker}
                        >
                            {times.map((time) => (
                                <Picker.Item key={time} label={time} value={time} />
                            ))}
                        </Picker>
                    </View>
                    <View style={styles.timePickerContainer}>
                        <Text style={styles.label}>Bath Off</Text>
                        <Picker
                            selectedValue={bathOffTime}
                            onValueChange={(itemValue) => setBathOffTime(itemValue)}
                            style={styles.timePicker}
                        >
                            {times.map((time) => (
                                <Picker.Item key={time} label={time} value={time} />
                            ))}
                        </Picker>
                    </View>
                </View>

                <Text style={styles.label}>Temperature Setpoint</Text>
                <TextInput
                    style={styles.input}
                    value={temperatureSetpoint}
                    onChangeText={(text) => setTemperatureSetpoint(text)}
                />

                <Text style={styles.note}>
                    Bath will turn on 2 hours before this to ensure it is at the right temperature
                </Text>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveButtonText}>Save Changes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.pumpNote}>NOTE: The pump and cooling is OFF outside of these times which may affect filtration and water cleanliness</Text>
            </ScrollView>

            <BottomNavBar />

            {
                showSidebar && (

                    <Pressable onPress={()=>setShowSidebar(!showSidebar)} style={{ position: "absolute", top: 0, left: 0, width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: "rgba(0,0,0,0.5)" }}>

                        <View style={{ backgroundColor: '#fff', paddingTop: 40, paddingHorizontal: 30, height: '100%', width: 310 }}>
                            <View style={{ backgroundColor: '#3B3C37', width: '100%', padding: 15, borderRadius: 10, marginBottom: 20 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 5, textAlign: "center" }}>Start Your Ice Bath Today!</Text>
                                <Text style={{ color: '#ddd', fontSize: 12 }}>Experience the benefits of cold therapy—boost recovery, enhance circulation, and build resilience. Take the plunge now!</Text>
                            </View>
                            <TouchableOpacity onPress={() => router.push("/home/notification")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="notifications-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Notification</Text>
                                <View style={{ backgroundColor: '#FF0000', width: 23, height: 23, borderRadius: 500, marginLeft: 10, justifyContent: "center", alignItems: "center" }}><Text style={{ color: "#fff" }}>5</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push("/home/control")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="settings-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Control</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push("/home/schedule")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="time-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Schedule</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push("/home/log")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="play-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Videos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push("/home/filter")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="help-circle-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Support</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push("/home/logs")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="list-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Logs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleShopPress} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="cart-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Shop</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => router.push("/")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
                                <Ionicons name="log-out-outline" size={24} color="#FF0000" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#FF0000', flex: 1 }}>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>

                )
            }
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
    successMessage: {
        backgroundColor: '#d4edda',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#c3e6cb',
    },
    successText: {
        color: '#155724',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
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
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    timePickerContainer: {
        flex: 1,
        marginRight: 10,
    },
    timePicker: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    note: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 20,
        fontStyle: 'italic',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#333',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: 'transparent',
        borderRadius: 8,
        alignItems: 'center',
        flex: 1,
        borderWidth: 1,
        borderColor: '#333',
        justifyContent: "center",
    },
    cancelButtonText: {
        color: '#333',
        fontSize: 16,
    },
    pumpNote: {
        fontSize: 12,
        color: 'gray',
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 70
    },
    picker: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        color: '#333',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50, // Adjust for status bar
        marginBottom: 20,
    },
    greeting: {
        fontSize: 18,
        color: '#3B3C37B2',
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default Schedule;
