import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchSection}>
      <TextInput 
        style={styles.input}
        placeholder="Search for cleaning, repair..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: { marginBottom: 20 },
  input: { backgroundColor: '#f0f0f0', padding: 15, borderRadius: 10 },
});

export default SearchBar;