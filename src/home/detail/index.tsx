import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

import styles from './styte';

const Detail = (): JSX.Element => {
  const navigation = useNavigation();
  type ScreenRoutProps = {
    Data: {
      screenName: string;
      myName: string;
    };
  };

  const route = useRoute<RouteProp<ScreenRoutProps, 'Data'>>();

  return (
    <View style={styles.container}>
      <Text>{route.params.myName}</Text>
      <Button
        title="Go to top tabs"
        onPress={() =>
          navigation.navigate('Top tab', {
            tab1: 'Restaurants',
            tab2: 'Super Market',
            tab3: 'Store',
          })
        }
      />
      <Button
        title="Go to bottom tabs"
        onPress={() => navigation.navigate('Bottom tab')}
      />
      <Button
        title="Go Back data"
        onPress={() => navigation.navigate('Feed')}
      />
    </View>
  );
};

export default Detail;
