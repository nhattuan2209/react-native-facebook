import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';


const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onCreateAccount = () =>{
      navigation.navigate('RegisterScreen');
    };

    const onLogin = () => {
      if( email && password) {
        auth()
        .signInWithEmailAndPassword(email,password)
        .then(response => {
          console.log('response: ', response);
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            Alert.alert('Your password is wrong!');
          } else{
            Alert.alert(`${error}`);
          }
          console.log('error :', error);
        });
      }
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image source={require('../../storage/images/logofb.png')} style={styles.logoStyle} />
                <TextInput
                    placeholder="Mobile number or email"
                    value={email}
                    onChangeText={value => setEmail(value)}
                    style={styles.inputBox}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={value => setPassword(value)}
                    style={styles.inputBox}
                />
                <TouchableOpacity onPress={onLogin} style={styles.loginButton}>
                    <Text style={styles.login}>Log in</Text>
                </TouchableOpacity>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
                <TouchableOpacity style={styles.newAccount} onPress={onCreateAccount}>
                    <Text style={styles.newAccountText}>Create new account</Text>
                </TouchableOpacity>
                <Image source={require('../../storage/images/meta-logo.png')} style={styles.metaLogoStyle} />
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    logoStyle: {
        height: 60,
        width: 60,
        marginVertical: '30%',
      },
      container: {
        flex: 1,
        padding: 16,
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

})