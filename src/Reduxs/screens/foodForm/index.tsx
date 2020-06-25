import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Food} from '../../redux/types/foodType';
import {addFood} from '../../redux/actions/foodAction';

const FoodForm = () => {
  const [foodName, setFoodName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux</Text>
      <TextInput
        value={foodName}
        placeholder="Name"
        style={styles.foodInput}
        onChangeText={(foood) => setFoodName(foood)}
      />
      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => {
          const food: Food = {name: foodName, key: Math.random()};
          dispatch(addFood(food));
        }}>
        <Text style={{fontSize: 22, color: '#5fc9f8'}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginBottom: 16}}
        onPress={() => navigation.navigate('FoodList')}>
        <Text style={{fontSize: 22}}>Go to FoodList</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 64,
    marginBottom: 48,
  },
  foodInput: {
    fontSize: 32,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    width: '80%',
    borderRadius: 10,
  },
});

export default FoodForm;
