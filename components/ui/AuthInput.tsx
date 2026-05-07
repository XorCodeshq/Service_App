import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

// isPassword and isSecure props-ai inga define panniruken
export const AuthInput = ({ label, placeholder, secureTextEntry, isPassword }: any) => {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.inputWrapper}>
        <TextInput 
          style={styles.input} 
          placeholder={placeholder} 
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#999"
        />
        {isPassword && (
          <TouchableOpacity>
            <Ionicons name="eye-outline" size={20} color="#999" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 8 },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    height: 50,
  },
  input: { flex: 1, fontSize: 14, color: '#333' },
});