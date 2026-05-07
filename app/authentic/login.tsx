import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { AuthInput } from '../../components/ui/AuthInput'; 
import { AuthButton } from '../../components/ui/AuthButton';

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.logo}>🏠 HomePro</Text>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Manage your home services with ease.</Text>

        <AuthInput label="Email Address" placeholder="name@example.com" />
        <AuthInput label="Password" placeholder="........" secureTextEntry={true} isPassword={true} />

        <AuthButton title="Sign In" />

        <View style={styles.divider}><Text style={styles.orText}>OR CONTINUE WITH</Text></View>

        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flex: 1 }}><AuthButton title="Google" variant="secondary" /></View>
          <View style={{ flex: 1 }}><AuthButton title="Apple" variant="secondary" /></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F9FBFF' },
  container: { padding: 25, flex: 1, justifyContent: 'center' },
  logo: { fontSize: 18, fontWeight: 'bold', color: '#1A3B8B', marginBottom: 40 },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 30 },
  divider: { alignItems: 'center', marginVertical: 20 },
  orText: { color: '#999', fontSize: 10, fontWeight: 'bold' }
});