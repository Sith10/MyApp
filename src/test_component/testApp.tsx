import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import {styles} from './testApp.style';

export interface Props {
  name: string;
  lastName: string;
}

const TestApp: React.FC<Props> = (props) => {
  const {name, lastName} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.texColor}>{name} </Text>
        <Text style={styles.texColor}>{lastName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TestApp;
