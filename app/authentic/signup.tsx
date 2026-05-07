import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { AuthInput } from '../../components/ui/AuthInput'; 
import { AuthButton } from '../../components/ui/AuthButton';

export default function SignupPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.brandText}>SecurePort</Text>
        
        <View style={styles.card}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.description}>Join SecurePort for effortless protection</Text>

          <AuthInput label="Full Name" placeholder="Enter your full name" />
          <AuthInput label="Email" placeholder="name@company.com" />
          <AuthInput label="Password" placeholder="........" secureTextEntry={true} isPassword={true} />

          <View style={{ marginTop: 10 }}>
            <AuthButton title="Sign Up" />
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>

          <AuthButton title="Sign in with Google" variant="secondary" />
          <AuthButton title="Sign in with Apple" variant="secondary" />

          <TouchableOpacity onPress={() => router.push('/authentic/login')} style={styles.footerLink}>
            <Text style={styles.footerText}>
              Already have an account? <Text style={styles.linkText}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFC' },
  scrollContainer: { padding: 24, justifyContent: 'center', flexGrow: 1 },
  brandText: { textAlign: 'center', fontSize: 22, fontWeight: '800', color: '#1E3A8A', marginBottom: 20 },
  card: { backgroundColor: '#FFF', borderRadius: 28, padding: 28, elevation: 4 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#0F172A', textAlign: 'center' },
  description: { fontSize: 14, color: '#64748B', textAlign: 'center', marginTop: 6, marginBottom: 28 },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  line: { flex: 1, height: 1, backgroundColor: '#F1F5F9' },
  orText: { marginHorizontal: 12, fontSize: 12, color: '#94A3B8', fontWeight: '600' },
  footerLink: { marginTop: 25, alignItems: 'center' },
  footerText: { color: '#64748B' },
  linkText: { color: '#1E3A8A', fontWeight: 'bold' }
});