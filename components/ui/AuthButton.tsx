import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
}

export const AuthButton = ({ title, onPress, variant = 'primary' }: Props) => {
  const isPrimary = variant === 'primary';
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, isPrimary ? styles.primary : styles.secondary]}
    >
      <Text style={[styles.text, isPrimary ? styles.textWhite : styles.textBlack]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  primary: { backgroundColor: '#0D2D84', borderColor: '#0D2D84' },
  secondary: { backgroundColor: '#FFF' },
  text: { fontSize: 16, fontWeight: 'bold' },
  textWhite: { color: '#FFF' },
  textBlack: { color: '#333' }
});