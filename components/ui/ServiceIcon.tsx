import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// We define the type for the title prop here
interface ServiceIconProps {
  title: string;
}

const ServiceIcon = ({ title }: ServiceIconProps) => (
  <View style={styles.iconBox}>
    <View style={styles.iconCircle}></View>
    <Text style={styles.iconLabel}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  iconBox: { alignItems: 'center' },
  iconCircle: { width: 50, height: 50, backgroundColor: '#e8eaf6', borderRadius: 10 },
  iconLabel: { fontSize: 12, marginTop: 5 }
});

export default ServiceIcon;