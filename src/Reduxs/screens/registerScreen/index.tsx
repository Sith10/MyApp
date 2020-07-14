import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [passord, setPasswor] = useState('');

  const handleLogin = () => {
    if (email.trim() == '' || email.trim().length == 0) {
      Alert.alert('Input email!');
    } else if (passord.trim() == '' || passord.trim().length == 0) {
      Alert.alert('Input password!');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, passord)
        .then((user) => {
          Alert.alert('Login success!');
        })
        .catch((error) => Alert.alert(error.message));
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.emailLayout}>
        <Text>Email</Text>
        <TextInput
          onChange={(e) => setEmail(e.nativeEvent.text)}
          style={styles.emailTextInput}
          placeholder="Email"
        />
      </View>
      <View style={[styles.emailLayout, {marginTop: 35}]}>
        <Text>Password</Text>
        <TextInput
          onChange={(e) => setPasswor(e.nativeEvent.text)}
          style={styles.emailTextInput}
          placeholder="Password"
        />
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.buttonLayout}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailLayout: {
    width: '80%',
  },
  emailTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 5,
    marginTop: 10,
  },
  buttonLayout: {
    borderRadius: 30,
    marginTop: 50,
    width: '75%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
  },
  registerButton: {
    marginTop: 25,
  },
  bottonLabel: {
    color: 'gray',
    fontWeight: 'bold',
  },
});
export default RegisterScreen;
