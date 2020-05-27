//import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';
import {styles} from './app.style';
import TestApp from './test_component/testApp';

const colors = ['purple', 'blue', 'green', 'pink', 'orange', 'black'];
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getRandomColor = (): string => {
  return colors[getRandomInt.length];
};

export const App = (): JSX.Element => {
  const [color, setColor] = useState('');
  const setLuckyColor = (): void => {
    setColor(getRandomColor());
  };

  const [randomColor, setRandomColor] = useState('purple');

  useEffect(() => {
    const changeColorInterval = setInterval(() => {
      setRandomColor(getRandomColor());
    }, 100);
    return () => {
      clearInterval(changeColorInterval);
    };
  }, []);
  // const [showMessage, setShowMessage] = useState(false);

  // const sayHello = (): void => {
  //   setShowMessage(!showMessage);
  // };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Random color:</Text>
        <Text style={[styles.colorText, {color: randomColor}]}>
          {randomColor}
        </Text>
        <Button title="Get your lucky color today" onPress={setLuckyColor} />
        {Boolean(color) && (
          <Text style={[styles.colorText, {color}]}>{color}</Text>
        )}
        {/* <Button title="Say Hello" onPress={sayHello} />
        {showMessage && <Text style={styles.message}>Hello world</Text>} */}
      </View>
    </SafeAreaView>
  );
};
