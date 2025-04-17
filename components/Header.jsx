import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    return (

        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setShowSidebar(!showSidebar)}>
                    <Ionicons name="menu-outline" size={30} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push("/home/profile")}>
                    <Ionicons name="person-circle-outline" size={30} color="#333" />
                </TouchableOpacity>
            </View>

            {
                showSidebar && (

                    <View style={{position:"absolute",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"#000"}}></View>

                )
            }

        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        marginBottom: 20,
    },

})
export default Header

//onPress={() => router.push("/home/temperature")}