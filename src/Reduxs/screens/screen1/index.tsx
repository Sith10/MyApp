import React, {Dispatch} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Button,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {
  IDecrementCountAction,
  IIncrementCountAction,
} from '../../redux/actions/countActions';
import {ISetNameAction} from '../../redux/actions/nameActions';
import {AppState} from '../../redux/reducers/rootReducer';
import {Names} from '../../redux/types/nameType';

// interface Props{
//   props
// }

const Screen_1 = () => {
  const {count} = useSelector((state: AppState) => state.count);
  const {name} = useSelector((state: AppState) => state.name);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(IIncrementCountAction());
  };
  const handleDecrement = () => {
    dispatch(IDecrementCountAction());
  };

  const handleSetName = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const value = e.nativeEvent.text;
    let Data: Names;
    Data = {name: value};

    dispatch(ISetNameAction(Data));
  };

  const handleLogout = () => {
    auth()
      .signOut()
      .then((user) => {
        navigation.navigate('Auth');
      })
      .catch((error) => {
        Alert.alert('Logout failed');
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.IncrementButton}
          onPress={handleIncrement}>
          <Text style={styles.Text}>INCREMENT</Text>
        </TouchableOpacity>

        <Text style={{marginVertical: 15}}>number: {count}</Text>

        <TouchableOpacity
          style={styles.DecrementButton}
          onPress={handleDecrement}>
          <Text style={styles.Text}>DECREMENT</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.textInput}
          placeholder="please input name..."
          onChange={handleSetName}
        />
        <Text>Name:{name}</Text>
        <TouchableOpacity
          style={[
            styles.DecrementButton,
            {backgroundColor: 'blue', borderColor: 'blue'},
          ]}
          onPress={() => navigation.navigate('FoodForm')}>
          <Text style={styles.Text}>FOOD FORM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.DecrementButton,
            {backgroundColor: 'blue', borderColor: 'blue'},
          ]}
          onPress={() => navigation.navigate('PostScreen')}>
          <Text style={styles.Text}>POSTSCREEN</Text>
        </TouchableOpacity>

        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  IncrementButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  DecrementButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  Text: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
  textInput: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
});

export default Screen_1;
