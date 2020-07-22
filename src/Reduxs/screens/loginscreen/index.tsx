import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [passord, setPasswor] = useState('');
  const provider = auth.FacebookAuthProvider;

  useEffect(() => {
    //auth().signOut()
    handleCheckLogin();
    return () => {
      handleCheckLogin();
    };
  }, []);
  const handleCheckLogin = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Home');
      }
    });
  };

  const handleLogin = () => {
    if (email.trim() == '' || email.trim().length == 0) {
      Alert.alert('Input email!');
    } else if (passord.trim() == '' || passord.trim().length == 0) {
      Alert.alert('Input password!');
    } else {
      auth()
        .signInWithEmailAndPassword(email, passord)
        .then((user) => {
          Alert.alert('Login success!');
        })
        .catch((error) => Alert.alert(error.message));
    }
  };

  const handleFaceBookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then(loginResul => {
        if (loginResul.isCancelled) {
          console.log('user canceled');
          return;
        }
        AccessToken.getCurrentAccessToken()
          .then((accessTokenData: any) => {
            const credential = provider.credential(accessTokenData.accessToken)
            return auth().signInWithCredential(credential)
          })
          .then(credData => {
            console.log(credData);
          })
          .catch(err => {
            console.log('Error', err);
          })
      })
  }

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      //throw ('User cancelled the login process');
      return;
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      //throw ('Something went wrong obtaining access token');
      return;
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

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
      <View style={[styles.emailLayout, { marginTop: 35 }]}>
        <Text>Password</Text>
        <TextInput
          onChange={(e) => setPasswor(e.nativeEvent.text)}
          style={styles.emailTextInput}
          placeholder="Password"
        />
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.buttonLayout}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <Button
        title="Facebook Sign-In"
        onPress={() =>
          handleFaceBookLogin()
          //Alert.alert('Hello')
          //onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))
        }
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterScreen')}
        style={styles.registerButton}>
        <Text style={styles.bottonLabel}>Don't have an account? Sign up</Text>
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
export default LoginScreen;
