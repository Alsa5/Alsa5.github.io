import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View>
        {/* Navbar */}
        <View style={styles.navbar}>
          <Text style={styles.logo}>Textrovert</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Menu</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Text style={styles.profileHeading}>Welcome Back!</Text>
          {/* Other profile information */}
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.heading}>Main Content</Text>
          {/* Other content */}
        </View>
      </View>
      <View style={styles.authButtons}>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingBottom: 10,
    },
    logo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    menuButton: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#f0f0f0',
    },
    menuText: {
      fontSize: 16,
      color: '#333',
    },
    profileSection: {
      marginTop: 20,
      marginBottom: 40,
    },
    profileHeading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
    },
    footer: {
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      paddingVertical: 10,
      alignItems: 'center',
    },
    footerText: {
      fontSize: 12,
      color: '#666',
    },
  });
  

export default HomeScreen;