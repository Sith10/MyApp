import * as React from 'react';
import {View, Text} from 'react-native';

import styles from './styte';

const Tab1 = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Hello Tab 1</Text>
    </View>
  );
};

export default Tab1;
