import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { fonts } from '@/src/utils/fonts';

const SignUpScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'All fields must be filled.');
      return;
    }
    Alert.alert('Sign Up Successful!');
    // Aqui, você pode adicionar a lógica para envio dos dados a um backend ou API.
  };

  return (
    <View style={styles.container}>

      <Text style={styles.legbtlog}>Já tem uma conta?</Text>

      <TouchableOpacity onPress={()=>router.push('/screens/login')}>
        <Text style={styles.buttonlog}>Login</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Crie sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        placeholderTextColor="#B0B0B0"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço de e-mail"
        placeholderTextColor="#B0B0B0"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Senha"
          placeholderTextColor="#B0B0B0"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Inscrever-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    backgroundColor: '#3E2D3F', // Fundo roxo escuro
  },
  title: {
    fontSize: 34,
    marginBottom: 40,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: fonts.Popcat, 
    letterSpacing: 1.5, // Espaçamento entre as letras para um toque moderno
  },
  input: {
    borderWidth: 1,
    borderColor: '#B0B0B0', // Cinza claro para bordas
    borderRadius: 10, // Bordas mais arredondadas
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    color: '#333333',
    fontSize: 16,
    fontFamily: 'Roboto',
    elevation: 3, // Elevação suave para dar sensação de profundidade
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 25,
    elevation: 3,
  },
  inputPassword: {
    flex: 1,
    padding: 15,
    color: '#333333',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  button: {
    backgroundColor: '#5D3F6E', // Tom mais suave de roxo para o botão
    padding: 16,
    borderRadius: 10, // Bordas arredondadas para o botão
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Mais ênfase e profundidade para o botão
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: fonts.ShineBubble,
  },
  buttonlog:{
    width: '10%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    position: 'absolute',
    right: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 7,
    paddingHorizontal: 22,
    paddingTop: 9,
    top: -25,
    paddingLeft: 38
  },
  legbtlog: {
    width: '20%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -52,
    top: 20,
    color: 'gray'
  },
});

export default SignUpScreen;35