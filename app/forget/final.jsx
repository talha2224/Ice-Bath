import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Img from '../../assets/images/auth/img1.png';
import { router } from 'expo-router';

const Final = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.subtitle}>
        We sent a password reset link to kel...@gmail.com. Click on the link in
        your email to reset your password.
      </Text>

      <View style={styles.imageContainer}>
        <Image source={Img} style={styles.image} resizeMode="contain" />
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>router.push("/")}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingVertical:80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
  },
  imageContainer: {
    marginBottom: 40,
    justifyContent:"center",
    alignItems:"center"
  },
  image: {
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Final;