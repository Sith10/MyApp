import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  Button,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../../redux/reducers/rootReducer';
import {deleteFood, updateFood} from '../../redux/actions/foodAction';
import {Food} from 'src/Reduxs/redux/types/foodType';

const foodData: Food = {
  name: '',
  key: 0,
};
const FoodList = () => {
  const foodList = useSelector((state: AppState) => state.food.data);
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [food, seFood] = useState<Food>(foodData);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleEditFood = (food: Food) => {
    seFood(food);
    toggleModal();
  };

  const handleSubmit = () => {
    dispatch(updateFood(food));
    toggleModal();
  };

  const handleOnchange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const value = e.nativeEvent.text;
    seFood({...food, name: value});
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listContainer}
        data={foodList}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={(data) => (
          <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="edit"
                  color="green"
                  size={36}
                  style={{marginRight: 10}}
                  onPress={() => handleEditFood(data.item)}
                />
                <Icon
                  name="delete"
                  size={36}
                  color="red"
                  onPress={() => dispatch(deleteFood(data.item))}
                />
              </View>
            }
          />
        )}
      />
      <Modal
        isVisible={isModalVisible}
        style={styles.view}
        testID={'modal'}
        onSwipeComplete={toggleModal}
        swipeDirection={['up', 'left', 'right', 'down']}>
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Hi 👋!</Text>
          <Text style={styles.contentSubTitle}>Change Food name!</Text>
          <TextInput
            value={food?.name}
            placeholder="Enter Text in TextInput"
            underlineColorAndroid="transparent"
            onChange={handleOnchange}
            style={styles.TextInputStyleClass}
          />
          <View style={styles.buttonLayout}>
            <Button
              testID={'close-button'}
              onPress={toggleModal}
              color="red"
              title="cancel"
            />
            <Button
              testID={'close-button'}
              onPress={handleSubmit}
              title="submit"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentSubTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  TextInputStyleClass: {
    textAlign: 'center',
    height: 50,
    width: '80%',
    marginVertical: 12,
    borderWidth: 2,
    borderColor: '#FF5722',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  buttonLayout: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  listContainer: {
    backgroundColor: '#dce2ff',
    padding: 16,
  },
  listText: {
    fontSize: 30,
  },
});

export default FoodList;
