import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

const RegisterScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onCreateAccount = () => {
    navigation.navigate('LoginScreen');
  };

  const onRegister = () => {
    if (password != confirmPassword) {
      Alert.alert("Password doesn't match");
      return;
    }
    if (email && password) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        })
    } else {
      Alert.alert("Please fill the require!")
    }

  };

  return (
    <View style={styles.container}>
      <Ionicon
        style={{ color: 'black' }}
        name="arrow-back"
        size={20}
        onPress={() => navigation.navigate('LoginScreen')}
      />
      <View style={styles.subContainer}>
        <Image source={require('../../storage/images/logofb.png')} style={styles.logoStyle} />
        <TextInput
          placeholder="Full Name"
          value={fullname}
          onChangeText={value => setFullname(value)}
          style={styles.inputBox}
        />
        <TextInput
          placeholder="Mobile number or email"
          value={email}
          onChangeText={value => setEmail(value)}
          style={styles.inputBox}
        />
        <TextInput
          placeholder="Password"
          value={confirmPassword}
          onChangeText={value => setConfirmPassword(value)}
          style={styles.inputBox}
        />
        <TextInput
          placeholder="Confirm Password"
          value={password}
          onChangeText={value => setPassword(value)}
          style={styles.inputBox}
        />
        <TouchableOpacity onPress={onRegister} style={styles.loginButton}>
          <Text style={styles.login}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newAccount} onPress={onCreateAccount}>
          <Text style={styles.newAccountText}>Already have an account?</Text>
        </TouchableOpacity>
        <Image source={require('../../storage/images/meta-logo.png')} style={styles.metaLogoStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    height: 60,
    width: 60,
    marginVertical: '20%',
  },
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: 'white'
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#3A3A3A',
    padding: 10,
    borderRadius: 12,
    width: '95%',
    marginTop: 12,
  },
  loginButton: {
    backgroundColor: '#1877F2',
    padding: 10,
    borderRadius: 20,
    width: '95%',
    alignItems: 'center',
    marginTop: 12,
  },
  login: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  forgotPass: {
    color: '#3A3A3A',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 15,
  },
  newAccount: {
    borderColor: '#1877F2',
    borderWidth: 1,
    padding: 10,
    borderRadius: 18,
    width: '95%',
    alignItems: 'center',
    marginTop: '35%',
  },
  newAccountText: {
    color: '#1877F2',
    fontSize: 14,
    fontWeight: '400',
  },
  metaLogoStyle: {
    height: 15,
    width: 70,
    marginTop: 15,
  },
});

export default RegisterScreen;