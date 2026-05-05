import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logoText}>HomePro</Text>
        <Text style={styles.location}>Chicago, IL • North Park</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchSection}>
        <TextInput 
          style={styles.input}
          placeholder="Search for cleaning, repair..."
        />
      </View>

      {/* Main Services */}
      <Text style={styles.sectionTitle}>Main Services</Text>
      <View style={styles.servicesGrid}>
        <ServiceIcon title="Plumbing" />
        <ServiceIcon title="Electric" />
        <ServiceIcon title="Cleaning" />
        <ServiceIcon title="HVAC" />
      </View>

      {/* Banner Section */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Deep Clean your home for only $99</Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.buttonText}>Book Expert Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const ServiceIcon = ({ title }: any) => (
  <View style={styles.iconBox}>
    <View style={styles.iconCircle}></View>
    <Text style={styles.iconLabel}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { marginTop: 40, marginBottom: 20 },
  logoText: { fontSize: 24, fontWeight: 'bold', color: '#1a237e' },
  location: { fontSize: 14, color: '#666' },
  searchSection: { marginBottom: 20 },
  input: { backgroundColor: '#f0f0f0', padding: 15, borderRadius: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  servicesGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  banner: { backgroundColor: '#3f51b5', padding: 20, borderRadius: 15, marginVertical: 20 },
  bannerText: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  bannerButton: { backgroundColor: '#fff', padding: 10, borderRadius: 20, width: 150 },
  buttonText: { textAlign: 'center', color: '#3f51b5', fontWeight: 'bold' },
  iconBox: { alignItems: 'center' },
  iconCircle: { width: 50, height: 50, backgroundColor: '#e8eaf6', borderRadius: 10 },
  iconLabel: { fontSize: 12, marginTop: 5 }
});