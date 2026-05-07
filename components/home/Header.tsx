import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>HomePro</Text>
      <Text style={styles.location}>Chicago, IL • North Park</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { marginTop: 40, marginBottom: 20 },
  logoText: { fontSize: 24, fontWeight: 'bold', color: '#1a237e' },
  location: { fontSize: 14, color: '#666' },
});

export default Header;