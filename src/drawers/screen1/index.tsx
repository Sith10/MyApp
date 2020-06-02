import * as React from 'react';
import {View, Text} from 'react-native';

import styles from './styte';

const Screen1 = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Hello Screen One</Text>
    </View>
  );
};

export default Screen1;
