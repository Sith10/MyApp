import * as React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styte';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

export interface Props {
  navigation: any;
}
export interface Data {
  name: string;
}

const Feed = (props: Props, data: Data): JSX.Element => {
  const navigation = useNavigation();
  // type ScreenRoutProps = {
  //   Data: {
  //     data: string;
  //   };
  // };
  // const route = useRoute<RouteProp<ScreenRoutProps, 'Data'>>();

  return (
    <View style={styles.container}>
      <Text>Hello Feed {data.name}</Text>
      {/* <Text>{route.params.data} </Text> */}
      <Button
        title="Go to Detail Screen"
        onPress={() =>
          navigation.navigate('Detail', {
            screenName: 'Hello my deltail',
            myName: 'NHOEK Sith SS',
          })
        }
      />
    </View>
  );
};

export default Feed;
