import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import BottomNavBar from '../../components/BottomNavbar'; // Assuming the path is correct
import { router } from 'expo-router';

const Profile = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push("/home")} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <View style={{ width: 24 }} />
            </View>

            {/* FAQ Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>FAQ</Text>
                <View style={styles.faqItems}>
                    <TouchableOpacity onPress={()=>router.push("/home/filter")} style={styles.faqItem}>
                        <View style={{ width: 40, height: 40, backgroundColor: "#3B3C37", justifyContent: "center", alignItems: "center" }}><Text style={{ color: "#fff" }}>F</Text></View>
                        <Text style={styles.faqText}>Filter Change</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>router.push("/home/notification")} style={styles.faqItem}>
                        <View style={{ width: 40, height: 40, backgroundColor: "#2F80ED", justifyContent: "center", alignItems: "center" }}><Text style={{ color: "#fff" }}>T</Text></View>
                        <Text style={styles.faqText}>Turning on Ice Bath</Text>
                    </TouchableOpacity>
                    <View style={styles.faqItem}>
                        <View style={{ width: 40, height: 40, backgroundColor: "#FFC000", justifyContent: "center", alignItems: "center" }}><Text style={{ color: "#fff" }}>C</Text></View>
                        <Text style={styles.faqText}>Changing Water</Text>
                    </View>
                </View>
            </View>

            {/* Instructions Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Instructions</Text>
                <View style={styles.instructionItems}>
                    <View style={styles.instructionItem}>
                        <View style={{ width: 40, height: 40, backgroundColor: "#3B3C37", justifyContent: "center", alignItems: "center" }}><Text style={{ color: "#fff" }}>F</Text></View>

                        <Text style={styles.instructionText}>Filter Change</Text>
                    </View>
                    <View style={styles.instructionItem}>
                        <View style={{ width: 40, height: 40, backgroundColor: "#2F80ED", justifyContent: "center", alignItems: "center" }}><Text style={{ color: "#fff" }}>T</Text></View>

                        <Text style={styles.instructionText}>Turning on Ice Bath</Text>
                    </View>
                    <View style={styles.instructionItem}>
                        <View style={{ width: 40, height: 40, backgroundColor: "#FFC000", justifyContent: "center", alignItems: "center" }}><Text style={{ color: "#fff" }}>C</Text></View>
                        <Text style={styles.instructionText}>Changing Water</Text>
                    </View>
                </View>
            </View>
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
        color: '#333',
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    avatar: {
        width: 50, // Adjust size as needed
        height: 50, // Adjust size as needed
        borderRadius: 25, // Make it a circle
        marginRight: 15,
        backgroundColor: '#ddd', // Placeholder background
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    sectionContainer: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    faqItems: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#ddd'

    },
    instructionItems: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#ddd'

    },
    faqItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    instructionItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    faqText: {
        fontSize: 16,
        color: '#333',
    },
    instructionText: {
        fontSize: 16,
        color: '#333',
    },
});

export default Profile;
