import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Pressable, Dimensions, Linking } from 'react-native';
import BottomNavBar from '../../components/BottomNavbar'; // Assuming the path is correct
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Logs = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const iceBathEntries = [
        { id: 1, time: '9:45 AM', temp: '121K', },
        { id: 2, time: '9:45 AM', temp: '151K', },
        { id: 3, time: '2nd 2025', temp: '151K', },
        { id: 4, time: '1st 2025', temp: '151K', },
        { id: 5, time: '9:45 AM', temp: '151K', },
        { id: 6, time: '1st 2025', temp: '151K', },
        { id: 7, time: '1st 2025', temp: '151K', },
        { id: 8, time: '9:45 AM', temp: '121K', },
        { id: 9, time: '2nd 2025', temp: '151K', },
    ];
        const handleShopPress = () => {
            Linking.openURL('https://nebula-me.ae/');
          };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setShowSidebar(!showSidebar)}>
                        <Ionicons name="menu-outline" size={30} color="#333" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push("/home/profile")}>
                        <Ionicons name="person-circle-outline" size={30} color="#333" />
                    </TouchableOpacity>
                </View>
                {iceBathEntries.map((entry) => (
                    <TouchableOpacity onPress={() => router.push("/home/log")} key={entry.id} style={styles.entryContainer}>

                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <View style={styles.iconContainer}>
                                <Ionicons name="snow" size={30} color="#00b0ff" />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.entryTemp}>{"Ice Bath"}</Text>
                                <Text style={styles.entryTime}>{"60 min"}</Text>
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.entryTemp}>{entry.temp}</Text>
                            <Text style={styles.entryTime}>{entry.time}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <BottomNavBar />

            {
                showSidebar && (

                    <Pressable onPress={() => setShowSidebar(!showSidebar)} style={{ position: "absolute", top: 0, left: 0, width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: "rgba(0,0,0,0.5)" }}>

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
        paddingTop: 30,
    },
    scrollView: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    menuButton: {},
    profileButton: {},
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'left'
    },
    entryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 8,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        justifyContent: "space-between"
    },
    iconContainer: {
        marginRight: 15,
    },
    textContainer: {
        flexDirection: 'column',

    },
    entryTemp: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    entryTime: {
        fontSize: 14,
        color: '#888',
    },
});

export default Logs;
