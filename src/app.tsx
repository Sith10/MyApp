import React, {useState} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {styles} from './app.style';

export const App = (): JSX.Element => {
  const [showMessage, setShowMessage] = useState(false);

  const sayHello = (): void => {
    setShowMessage(!showMessage);
  };

  return (
    <SafeAreaView>
      <Button title="Say Hello" onPress={sayHello} />
      {showMessage && <Text style={styles.message}>Hello world</Text>}
    </SafeAreaView>
  );
};
