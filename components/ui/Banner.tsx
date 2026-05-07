import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Banner = () => (
  <View style={styles.banner}>
    <Text style={styles.bannerText}>Deep Clean your home for only $99</Text>
    <TouchableOpacity style={styles.bannerButton}>
      <Text style={styles.buttonText}>Book Expert Now</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  banner: { backgroundColor: '#3f51b5', padding: 20, borderRadius: 15, marginVertical: 20 },
  bannerText: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  bannerButton: { backgroundColor: '#fff', padding: 10, borderRadius: 20, width: 150 },
  buttonText: { textAlign: 'center', color: '#3f51b5', fontWeight: 'bold' },
});

export default Banner;