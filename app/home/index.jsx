import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNavBar from '../../components/BottomNavbar'; // Assuming this component exists
import { router } from 'expo-router';

const Home = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => setShowSidebar(!showSidebar)}>
                    <Ionicons name="menu-outline" size={30} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/home/profile")}>
                    <Ionicons name="person-circle-outline" size={30} color="#333" />
                </TouchableOpacity>
            </View>

            <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                <Text style={styles.greeting}>Good Evening 🌜,</Text>
                <Text style={styles.username}>Bidemi</Text>
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                <Text style={styles.title}>GOT AN ICE BATH?</Text>
                <Text style={styles.instructionsTitle}>Follow these steps to get your bath connected to this app</Text>
                <View style={styles.instructionList}>
                    <Text style={styles.instructionItem}>• Find the QR code inside the Starter Box that came with your bath.</Text>
                    <Text style={styles.instructionItem}>• Tap "SCAN QR CODE" button below and use your phone's camera to scan.</Text>
                </View>

                <Text style={styles.alternativeTitle}>Not got a starter box? Alternatively you can use the QR code on your Ice Bath</Text>
                <View style={styles.alternativeList}>
                    <Text style={styles.alternativeItem}>• Go to your bath (or barrel bench) and remove the end vent or top hatch if your bath have one.</Text>
                    <Text style={styles.alternativeItem}>• Inside the compartment area you'll find a white label displaying a bath ID and a QR Code.</Text>
                    <Text style={styles.alternativeItem}>• Tap "SCAN QR CODE" button below and use your phone's camera to scan.</Text>
                </View>

                <TouchableOpacity onPress={() => router.push("/home/scan")} style={styles.scanButton}>
                    <Text style={styles.scanButtonText}>Scan QR Code</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Navigation Bar */}
            <BottomNavBar />


            {
                showSidebar && (

                    <Pressable onPress={()=>setShowSidebar(!showSidebar)}  style={{ position: "absolute", top: 0, left: 0, width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: "rgba(0,0,0,0.5)" }}>

                        <View style={{ backgroundColor: '#fff', paddingTop: 40, paddingHorizontal: 30, height: '100%', width: 310 }}>
                            <View style={{ backgroundColor: '#3B3C37', width: '100%', padding: 15, borderRadius: 10, marginBottom: 20 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 5,textAlign:"center" }}>Start Your Ice Bath Today!</Text>
                                <Text style={{ color: '#ddd', fontSize: 12 }}>Experience the benefits of cold therapy—boost recovery, enhance circulation, and build resilience. Take the plunge now!</Text>
                            </View>
                            <TouchableOpacity onPress={()=>router.push("/home/notification")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="notifications-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Notification</Text>
                                <View style={{ backgroundColor: '#FF0000', width:23, height:23, borderRadius:500, marginLeft: 10,justifyContent:"center",alignItems:"center" }}><Text  style={{color:"#fff"}}>5</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>router.push("/home/control")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="settings-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Control</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>router.push("/home/schedule")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="time-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Schedule</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>router.push("/home/log")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="play-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Videos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>router.push("/home/filter")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="help-circle-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Support</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>router.push("/home/logs")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="list-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Logs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>router.push("/home/logs")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                                <Ionicons name="cart-outline" size={24} color="#333" />
                                <Text style={{ marginLeft: 15, fontSize: 16, color: '#333', flex: 1 }}>Shop</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>router.push("/")} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
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
    content: {
        paddingHorizontal: 20,
        flex: 1,
    },
    title: {
        fontSize: 20,
        color: '#333',
        marginBottom: 15,
        fontWeight: "600"
    },
    instructionsTitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10,
    },
    instructionList: {
        marginBottom: 20,
    },
    instructionItem: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
        marginLeft: 10,
    },
    alternativeTitle: {
        fontSize: 16,
        color: '#333',
        marginTop: 20,
        marginBottom: 10,
    },
    alternativeList: {
        marginBottom: 30,
    },
    alternativeItem: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
        marginLeft: 10,
    },
    scanButton: {
        backgroundColor: '#333',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    scanButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Home;