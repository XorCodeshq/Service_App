import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import SearchBar from './SearchBar';

import ServiceIcon from '../ui/ServiceIcon'; 
import Banner from '../ui/Banner';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <SearchBar />

      <Text style={styles.sectionTitle}>Main Services</Text>
      <View style={styles.servicesGrid}>
        <ServiceIcon title="Plumbing" />
        <ServiceIcon title="Electric" />
        <ServiceIcon title="Cleaning" />
        <ServiceIcon title="HVAC" />
      </View>

      <Banner />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  servicesGrid: { flexDirection: 'row', justifyContent: 'space-between' },
});

export default HomeScreen;