import React from 'react'
import { View, Text, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const handleLogout = () => {
        auth().signOut()
            .then(() => {
                navigation.navigate('Auth')
            })
            .catch(error => {
                //console.log(error.message);
                Alert.alert(error.message)
            })
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                Home Screen
            </Text>
            <Text style={{ marginVertical: 16, color: 'blue' }}>
                {auth().currentUser?.email}
            </Text>
            <Button title='Logout' onPress={handleLogout} />
        </View>
    )
}

export default HomeScreen;
