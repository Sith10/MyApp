import * as React from 'react';
import {View, Text} from 'react-native';

import styles from './styte';

const Tests = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Hello Tests </Text>
    </View>
  );
};

export default Tests;
